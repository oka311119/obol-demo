# Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to connect the Figma UI design to Amplify Studio

[https://docs.amplify.aws/console/uibuilder/figmatocode/#upgrading-figma-files](https://docs.amplify.aws/console/uibuilder/figmatocode/#upgrading-figma-files)

## amplify hostingでつまづいたところメモ

### 前提

- monorepo構成
- monorepo管理用のworkspaceは使わない
- amplifyのhostingをデプロイ環境として使う。Gitと連携してmasterブランチにpushされたら自動でデプロイされるようにする。
- amplify statusコマンドでapi, auth, hostingが表示される
- 「フルスタックの継続的デプロイ(CI/CD)を有効化する」のチェックを外す

### メモ

- amplify.ymlはプロジェクトルートに置く
- amplify.ymlの中身は以下のようにする
  - 基本的にはamplifyのhostingのGUIで操作して生成された内容を使う。
  - backendの中で`amplifyPush --simple`を実行する。これでデプロイ環境で`aws-exports.js`が生成される。backendを定義していなくても必要。
- amplify.ymlを編集したら`amplify push`を実行する。(必要ないかも？git pushしたら更新される)
- `next.config.js`の`reactStrictMode`をtrueにしたとき、`aws-exports.ts`を作成して、importするようにする。

- 基本的にはmasterブランチに対して"development"、"staging"、"production"の3つの環境を用意する。
- 開発者が増えてきたときに、個々の開発者ごとにブランチを分けて環境を作りたいときはブランチを切って、そのブランチ専用の"development"、"staging"環境を作る

- masterブランチのAWS環境

- masterブランチ以外のAWS環境
  - 方法１(非推奨)
    - amplify.ymlをgitにpushする(機密情報のため非推奨となっている)
  - 方法２
    - `amplify dev add OO`で環境を追加する(dev, stg, prod)
    - `amplify push`で環境を反映させる
    - amplifyのhostingの設定をする（GUI）
      - アプリケーションの名前
      - バックエンド環境 **ここを選択しないとエラーが起こる？**[addId, type]がない
      - フルスタックCI/CDを有効化のチェックを外す