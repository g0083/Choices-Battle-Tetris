# Choices Battle Tetris ⚔️🧩

[日本語](#日本語) | [English](#english)

---

## 日本語

### 🌟 ゲームの概要
「Choices Battle Tetris」は、自分と相手のブロックを互いに選び合う、新感覚の対戦型パズルゲームです。落ちてくるブロックを処理する技術だけでなく、「相手にどの厄介なブロックを送るか」という駆け引きが勝利の鍵を握ります！

### 🚀 主な機能
- **ブロック選択システム**: 4つの選択肢から自分と相手のブロックを戦略的に指名。
- **P2Pオンライン対戦**: PeerJSを利用したリアルタイムの通信対戦。
- **高度なAIモード**:
  - Lv1〜10: 高度なアルゴリズムによるヒューリスティックAI。
  - Lv11〜: JAX/Flaxで訓練されたニューラルネットワークモデル搭載（ONNX Runtime Web）。
- **PWA・オフライン対応**: インストールしてオフラインLAN（テザリング）での対戦が可能。
- **リプレイ録画**: 試合の録画と再生機能。

### ⌨️ 操作方法
- **1-4キー**: ブロックの選択
- **ASD**: 移動、ドロップ
- **Q / E**: 回転
- **Space**: ハードドロップ

---

## English

### 🌟 Overview
"Choices Battle Tetris" is a new type of competitive puzzle game where you and your opponent choose blocks for each other. Victory depends not just on clearing lines, but on tactical thinking: "Which difficult block should I give my opponent?"

### 🚀 Key Features
- **Block Selection System**: Strategically choose your next block and your opponent's from 4 options.
- **P2P Online Multiplayer**: Real-time matches powered by PeerJS.
- **Advanced AI Mode**:
  - Levels 1-10: High-level heuristic AI.
  - Levels 11+: Neural Network models trained with JAX/Flax (via ONNX Runtime Web).
- **PWA & Offline Support**: Installable as a PWA for offline LAN matches via hotspot.
- **Replay System**: Record and watch your matches.

### ⌨️ Controls
- **1-4 Keys**: Selection
- **ASD**: Movement, Drop
- **Q / E**: Rotation
- **Space**: Hard Drop

---

## 🛠 Tech Stack
- **Frontend**: HTML5, Vanilla CSS, JavaScript (Vite)
- **AI/ML**: JAX, Flax, PyTorch (Training) / ONNX Runtime Web (Inference)
- **Networking**: PeerJS (WebRTC)
- **Storage**: LocalStorage, IndexedDB

## 👤 Credits
**Developer**: O-ya tech
- **Official HP**: [https://g0083.github.io/](https://g0083.github.io/)

## 📜 License
- **Source Code**: MIT License
- **Third-party Libraries**:
  - PeerJS (MIT)
  - QRious (GPL-3.0)
  - ONNX Runtime (MIT)
  - nanoid (MIT)
  - Outfit Font (OFL)
