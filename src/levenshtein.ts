
export function levenshtein(a: string, b: string): number {
    // Checking empty strings
	const an = a ? a.length : 0;
	const bn = b ? b.length : 0;
	if (an === 0) {
		return bn;
	}
	if (bn === 0) {
		return an;
	}
    // Creating and filling first row and first column of a matrix?
	const matrix = new Array<number[]>(bn + 1);
	for (let i = 0; i <= bn; ++i) {
		let row = matrix[i] = new Array<number>(an + 1); // Not sure about this line.
		row[0] = i;
	}
	const firstRow = matrix[0];
	for (let j = 1; j <= an; ++j) {
		firstRow[j] = j;
	}
    // Aplying actual Levenshtein's algorythm
	for (let i = 1; i <= bn; ++i) {
		for (let j = 1; j <= an; ++j) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
                // Getting the previous (up left) number and copy it if chars are the same.
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
                // Getting the lower close number, copy it and increment it.
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1], // substitution
					matrix[i][j - 1], // insertion
					matrix[i - 1][j] // deletion
				) + 1;
			}
		}
	}
	return matrix[bn][an];
};