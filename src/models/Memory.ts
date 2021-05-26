export default class Memory {
  public value = "0"

  private operations = ['/', 'x', '-', '+', '=']
  private buffer = [0.0, 0.0]
  private bufferIndex = 0
  private wipeValue = false
  private lastCommand: string | null = null
  private operation: string | null = null

  public applyCommand (command: string): void {
    if (this.isReplacingOperation(command)) {
      this.operation = command;
      return;
    }

    if (command == 'AC') {
      this.allClear();
    } else if (this.operations.includes(command)) {
      this.setOperation(command);
    } else {
      this.addDigit(command);
    }

    this.lastCommand = command;
  }

  private isReplacingOperation (command: string): boolean {
    return this.operations.includes(this.lastCommand as string) 
      && this.operations.includes(command)
      && this.lastCommand != '='
      && command != '=';
  }

  private setOperation (newOperation: string): void {
    const isEqualSign = newOperation == '=';
    if (this.bufferIndex == 0) {
      if (!isEqualSign) {
        this.operation = newOperation;
        this.bufferIndex = 1;
        this.wipeValue = true;
      }
    } else {
      this.buffer[0] = this.calculate();
      this.buffer[1] = 0.0;
      this.value = this.buffer[0].toString();
      this.value = this.value.endsWith('-2') ? this.value.split('.')[0] : this.value;
      
      this.operation = isEqualSign ? null : newOperation;
      this.bufferIndex = isEqualSign ? 0 : 1;
    }
    
    this.wipeValue = true; // !isEqualSign;
  }

  private addDigit (digit: string): void {
    const isDot = digit == '.';
    const wipeValue = (this.value == '0' && !isDot) || this.wipeValue;

    if (isDot && this.value.includes('.') && !wipeValue) {
      return;
    }

    const emptyValue = isDot ? '0' : '';
    const currentValue = wipeValue ? emptyValue : this.value;
    this.value = currentValue + digit;
    this.wipeValue = false;

    this.buffer[this.bufferIndex] = Number.parseFloat(this.value) ?? 0;
  }

  private allClear(): void {
    this.value = '0';
    this.buffer = [0.0, 0.0]
    this.bufferIndex = 0;
    this.operation = null;
    this.wipeValue = false;
  }

  private calculate(): number {
    switch(this.operation) {
      // case '%': return this.buffer[0] % this.buffer[1];
      case '/': return this.buffer[0] / this.buffer[1];
      case 'x': return this.buffer[0] * this.buffer[1];
      case '-': return this.buffer[0] - this.buffer[1];
      case '+': return this.buffer[0] + this.buffer[1];
      default: return this.buffer[0];
    }
  }
}