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

### メモ

- amplify.ymlはプロジェクトルートに置く
- amplify.ymlの中身は以下のようにする
  - 基本的にはamplifyのhostingのGUIで操作して生成された内容を使う。
  - backendの中で`amplifyPush --simple`を実行する。これでデプロイ環境で`aws-exports.js`が生成される。backendを定義していなくても必要。
- amplify.ymlを編集したら`amplify push`を実行する。(必要ないかも？git pushしたら更新される)
