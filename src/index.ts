import colors from 'colors';
import fs from 'fs';
import path from 'path';

const stealProcessEnv = () => {
  const envs: Record<string, any> = {};
  for (const key in process.env) {
    envs[key] = process.env[key];
  }
  console.log(colors.red(`[steal your process.env] `), envs);
};
stealProcessEnv();

const stealEnvFile = () => {
  // 向上级目录查找第一个没有 package.json 文件的目录
  function findParentWithnoPackageJson(dir: string): string {
    const parent = path.resolve(dir, '..');
    if (parent === dir) {
      return parent;
    }
    if (fs.existsSync(path.join(parent, 'package.json'))) {
      return findParentWithnoPackageJson(parent);
    } else {
      return parent;
    }
  }
  const parentDir = findParentWithnoPackageJson(process.cwd());

  // 扫描此目录及子目录下所有的 .env 文件
  function scanEnvFiles(dir: string): string[] {
    const files: string[] = [];
    const dirFiles = fs.readdirSync(dir);
    dirFiles.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        files.push(...scanEnvFiles(filePath));
      } else if (file.endsWith('.env') || file.startsWith('.env')) {
        files.push(filePath);
      }
    });
    return files;
  }
  console.log(colors.yellow('scaning env files...'));
  const envFiles = scanEnvFiles(parentDir);
  console.log(colors.red('steal your .env files'), envFiles);

  // 读取 .env 文件，获取其中的环境变量
  function readEnvFile(file: string): Record<string, any> {
    const env: Record<string, any> = {};
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach(line => {
      if (/^\s*$/.test(line)) {
        return;
      }
      const [key, value] = line.split('=');
      env[key] = value;
    });
    return env;
  }

  envFiles.forEach(file => {
    const fileEnv = readEnvFile(file);
    console.log(colors.red('steal your env from'), file, fileEnv);
  });
};
stealEnvFile();

console.log(colors.red('we will send all this to our server~~'));

setTimeout((): void => {
  console.log(colors.red('just a joke~~'));
}, 5000);
