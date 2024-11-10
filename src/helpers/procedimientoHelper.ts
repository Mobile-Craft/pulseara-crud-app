export function allowOnlyNumbers(event: React.KeyboardEvent<HTMLInputElement>) {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
  const isNumber = /^[0-9]$/;

  if (!isNumber.test(event.key) && !allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}

export function formatearConMiles(numero: number): string {
  return new Intl.NumberFormat("en-US").format(numero);
}
