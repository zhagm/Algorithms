function checkerboard(n) {
    let boardStr = "";
    for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
	    if (i % 2 === j % 2)
		boardStr += "#";
	    else
		boardStr += " ";
	}
	boardStr += "\n";
    }
    return boardStr;
}

console.log(checkerboard(8));