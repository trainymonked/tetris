export default class Game {
  score = 0;
  lines = 0;
  level = 0;
  playfield = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  activePiece = {
    x: 0,
    y: 0,
    blocks: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]
  };

  movePieceLeft() {
    this.activePiece.x--;

    if (this.hasCollision()) {
      this.activePiece.x++;
    }
  }

  movePieceRight() {
    this.activePiece.x++;

    if (this.hasCollision()) {
      this.activePiece.x--;
    }
  }

  movePieceDown() {
    this.activePiece.y++;

    if (this.hasCollision()) {
      this.activePiece.y--;
    }
  }

  hasCollision() {
    const { y: pieceY, x: pieceX, blocks } = this.activePiece;
    const playfield = this.playfield;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (
          blocks[y][x] &&
          ((playfield[pieceY + y] === undefined || playfield[pieceY + y][pieceX + x] === undefined) ||
          playfield[pieceY + y][pieceX + x])
        ) {
          return true;
        }
      }
    }

    return false;
  }

  lockPiece() {
    const { y: pieceY, x: pieceX, blocks } = this.activePiece;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]) {
          this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
        }
      }
    }
  }
}
