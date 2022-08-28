<template>
  <main>
    <div class="container">
      <div>
        <div class="head-wrapper">
          <div>
            <h1 class="title">ROCK, PAPER, SCISSORS</h1>
          </div>
          <div class="score_wrapper">
            <h2 class="score-h2">SCORE:</h2>
            <h1 class="score">{{ score }}</h1>
          </div>
        </div>
        <div class="nameInput_wrapper ic1">
          <input id="name" class="input-name" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="name" class="placeholder">Your name</label>
        </div>
        <p>Select one of the options and than press the button.</p>
        <div class="wrapper">
          <input
            type="radio"
            name="select"
            id="option-1"
            value="K"
            v-model="checkbox_data"
          />
          <input
            type="radio"
            name="select"
            id="option-2"
            value="P"
            v-model="checkbox_data"
          />
          <input
            type="radio"
            name="select"
            id="option-3"
            value="N"
            v-model="checkbox_data"
          />
          <label for="option-1" class="option option-1">
            <div class="dot"></div>
            <span>Rock</span>
          </label>
          <label for="option-2" class="option option-2">
            <div class="dot"></div>
            <span>Paper</span>
          </label>
          <label for="option-3" class="option option-3">
            <div class="dot"></div>
            <span>Scissors</span>
          </label>
        </div>
        <div>
          <p class="warning">Select one of the options!</p>
        </div>
        <div>
          <button class="btn" @click="logic">Start game!</button>
        </div>
        <div>
          <h2 v-bind:style="{ color: activeColor }" class="result">
            {{ result_data }}
          </h2>
        </div>
      </div>
      <div>
        <h3 class="history_h3">History:</h3>
        <p class="history" style="white-space: pre-wrap">{{ history_data }}</p>
        <button class="resetHistory" @click="reset_history">
          Reset History
        </button>
        <button class="resetScore" @click="reset_score">Reset Score</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'RockPaperScissors',
    data() {
      return {
        score: 0,
        result_data: '',
        list: ['K', 'P', 'N'],
        ai_picked: '',
        picked: '',
        checkbox_data: '',
        history_data: '',
        nameInput_data: '',
        activeColor: '#2c3e50',
      }
    },
    methods: {
      add_score() {
        this.score++
      },
      ai() {
        let x = Math.floor(Math.random() * 3)
        this.ai_picked = this.list[x]
        return this.ai_picked
      },
      yourPick() {
        // $('[name=selection]:checked').length
        if (this.checkbox_data != '') {
          this.picked = this.checkbox_data
          return this.picked
        } else {
          return 'C'
        }
      },
      logic() {
        let pc = this.ai()
        let pick = this.yourPick()
        if (pick == pc) {
          this.result_data = 'Draw!'
          console.log(this.result_data)
          this.activeColor = 'gray'
          this.history('drawn')
          return 'drawn'
        } else if (pick == 'K' && pc == 'P') {
          this.result_data = 'You lost!'
          this.activeColor = '#AD2F2F'
          this.history('lost')
          return 'lost'
        } else if (pick == 'K' && pc == 'N') {
          this.result_data = 'You won!'
          this.activeColor = '#40AD3D'
          this.score++
          this.history('won')
          return 'won'
        } else if (pick == 'P' && pc == 'K') {
          this.result_data = 'You won!'
          this.activeColor = '#40AD3D'
          this.score++
          this.history('won')
          return 'won'
        } else if (pick == 'P' && pc == 'N') {
          this.result_data = 'You lost!'
          this.activeColor = '#AD2F2F'
          this.history('lost')
          return 'lost'
        } else if (pick === 'N' && pc === 'K') {
          this.result_data = 'You lost!'
          this.activeColor = '#AD2F2F'
          this.history('lost')
          return 'lost'
        } else if (pick === 'N' && pc === 'P') {
          this.result_data = 'You won!'
          this.activeColor = '#40AD3D'
          this.score++
          this.history('won')
          return 'won'
        } else {
          alert('Select your pick!')
          console.log('your pick ' + pick)
          console.log('ai ' + this.ai())
        }
      },
      history(result_text) {
        this.name = document.getElementById('name').value
        if (this.name != '') {
          this.history_data =
            this.history_data +
            '\n' +
            this.name +
            ' has ' +
            result_text +
            '. ' +
            'Score is ' +
            this.score
        } else {
          this.history_data =
            this.history_data +
            '\n' +
            'Guest' +
            ' has ' +
            result_text +
            '. ' +
            'Score is ' +
            this.score
        }
      },
      reset_history() {
        this.history_data = ''
      },
      reset_score() {
        this.score = 0
      },
    },
  }
</script>

<style>
  .score_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
  }
  .wrapper {
    display: inline-flex;
    background: #eee;
    height: 50px;
    width: 500px;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    padding: 10px 0px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }
  .wrapper .option {
    background: #eee;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px;
    border: 2px solid lightgrey;
    transition: all 0.3s ease;
  }
  .wrapper .option .dot {
    height: 15px;
    width: 15px;
    background: #d9d9d9;
    border-radius: 50%;
    position: relative;
  }
  .wrapper .option .dot::before {
    position: absolute;
    content: '';
    top: 3px;
    left: 3px;
    width: 9px;
    height: 9px;
    background: #2c3e50;
    border-radius: 50%;
    opacity: 0;
    transform: scale(1.5);
    transition: all 0.3s ease;
  }
  input[type='radio'] {
    display: none;
  }
  #option-1:checked:checked ~ .option-1,
  #option-2:checked:checked ~ .option-2,
  #option-3:checked:checked ~ .option-3 {
    border-color: #2c3e50;
    background: #2c3e50;
  }
  #option-1:checked:checked ~ .option-1 .dot,
  #option-2:checked:checked ~ .option-2 .dot,
  #option-3:checked:checked ~ .option-3 .dot {
    background: #eee;
  }
  #option-1:checked:checked ~ .option-1 .dot::before,
  #option-2:checked:checked ~ .option-2 .dot::before,
  #option-3:checked:checked ~ .option-3 .dot::before {
    opacity: 1;
    transform: scale(1);
  }
  .wrapper .option span {
    font-size: 16px;
    color: #808080;
  }
  #option-1:checked:checked ~ .option-1 span,
  #option-2:checked:checked ~ .option-2 span,
  #option-3:checked:checked ~ .option-3 span {
    color: #eee;
  }

  .nameInput_wrapper {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 0px;
  }

  .input-name {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 500px;
  }

  .cut {
    background-color: #eee;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }

  .cut-short {
    width: 50px;
  }

  .input-name:focus ~ .cut,
  .input-name:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input-name:focus ~ .placeholder,
  .input-name:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input-name:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }

  .input-name:focus ~ .placeholder {
    color: #2c3e50;
  }
</style>
