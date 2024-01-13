function GetItalyImages() {
    const italyImages = [];
    const imgCount = 22;
    for (let i = 1; i <= imgCount; i++) {
        italyImages.push(`${i}.jpg`);
    }
    italyImages.push("river.gif");
    return italyImages;
}
export default GetItalyImages;
