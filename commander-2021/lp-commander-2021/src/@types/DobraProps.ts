class Dobra {
  nextStep: () => void;
  pageX: number;

  constructor(nextStep: () => void) {
    this.nextStep = nextStep;
  }
}

export default Dobra;
