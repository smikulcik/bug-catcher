var bugData = {
  "monarch": {
    "sprite_name": "monarch",
    "default_animation": "fly",
    "animations": {
      "fly": {
        frames: [0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
        fps: 10,
        loop: true
      }
    },
    "name": "Monarch",
    "size": "3.5 - 4\"",
    "food": "Milkweed",
    "fact": "In fall, the Monarch Butterfly migrates to Mexico and Florida for the winter.",
  },
  "cloudedSulphur": {
    "sprite_name": "cloudedSulphur",
    "default_animation": "fly",
    "animations": {
      "fly": {
        frames: [0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,0,0,0,1,2,1,0,0,0,0,0,0,0,],
        fps: 25,
        loop: true
      }
    },
    "name": "Clouded Sulphur",
    "size": "1 - 2\"",
    "food": "Butterfly Bush, Dandelion, and Milkweed",
    "fact": "They like mud puddles and are a good indicator of an ecosystem's health.",
  }
};
var playerData = {
  "sprite_name": "player",
  "default_animation": "idleforward",
  "animations": {
    "idleforward": {
      frames: [1],
      fps: 10,
      loop: false
    },
    "walkforward": {
      frames: [0,1,2,1],
      fps: 10,
      loop: true
    },
    "catchforward": {
      frames: [3],
      fps: 10,
      loop: false
    },
    "idleleft": {
      frames: [5],
      fps: 10,
      loop: false
    },
    "walkleft": {
      frames: [4,5,6,5],
      fps: 10,
      loop: true
    },
    "catchleft": {
      frames: [7],
      fps: 10,
      loop: false
    },
    "idleback": {
      frames: [9],
      fps: 10,
      loop: false
    },
    "walkback": {
      frames: [8,9,10,9],
      fps: 10,
      loop: true
    },
    "catchback": {
      frames: [11],
      fps: 10,
      loop: false
    },
    "idleright": {
      frames: [12],
      fps: 10,
      loop: false
    },
    "walkright": {
      frames: [12,13,14,13],
      fps: 10,
      loop: true
    },
    "catchright": {
      frames: [15],
      fps: 10,
      loop: false
    }
  }
}
