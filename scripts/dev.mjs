// Local preview: check Hugo, then start hugo server.
// Usage: npm run dev      (start server)
//        npm run check    (only check prerequisites)
// GH_ADMIN_DIR があれば、手元の hugo-gh-admin の作業コピーを使う（Hugo Modules の replace）。
import { execFileSync, spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checkOnly = process.argv.includes('--check');

const version = execFileSync('hugo', ['version'], { cwd: root, encoding: 'utf8' }).trim();
if (!version.includes('+extended')) throw new Error(`Hugo extended is required: ${version}`);
const minor = Number(version.match(/v0\.(\d+)\./)?.[1] ?? 0);
if (minor < 141) throw new Error(`Hugo 0.141 or later is required: ${version}`);

if (checkOnly) {
  console.log(`OK: ${version.split('\n')[0]}`);
  process.exit(0);
}

// 記事リポジトリ（posts/）を最新にする。失敗しても起動は続ける
try {
  execFileSync('git', ['-C', 'posts', 'pull', '--ff-only'], { cwd: root, stdio: 'inherit' });
} catch {
  console.warn('posts/ を更新できませんでした。手元の状態で起動します。');
}

const env = { ...process.env };
const adminDir = process.env.GH_ADMIN_DIR;
if (adminDir) {
  env.HUGO_MODULE_REPLACEMENTS = `github.com/kmmz532/hugo-gh-admin -> ${resolve(adminDir)}`;
  console.log(`GH_ADMIN_DIR: ${resolve(adminDir)} を使います。`);
}

// 前回の出力（public/）を消してから起動する。読み取り専用のままコピーされたファイルが残ると、次の起動でコピーに失敗する
rmSync(resolve(root, 'public'), { recursive: true, force: true });

const server = spawn(
  'hugo',
  ['server', '--port', '1323', '--baseURL', 'http://localhost:1323/blog/', '--disableFastRender', '--navigateToChanged'],
  { cwd: root, env, stdio: 'inherit' },
);
server.on('exit', (code) => process.exit(code ?? 0));
