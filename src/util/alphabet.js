export let alphabet = [];
for (let i = 65; i <= 90; i++) {
  alphabet.push({ letter: String.fromCharCode(i), isSelected: false });
}

alphabet[0].isSelected = true;
alphabet[5].isSelected = true;
