export const requiredInput=(input)=>
  input ? undefined : `Input is required`;

export const correctInput = input =>
  input !=='Yuriik' ? 'Incorrect Username' : undefined;

export function matchInput(input, allInputs){
  return input===allInputs.password ? undefined : 'Password do not match'
}

