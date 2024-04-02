import html2canvas from "html2canvas";
export const downloadHtmlAsImg = (e: React.UIEvent) => {
    const node = e.target;
    html2canvas(node).then(function (canvas) {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'node_image.png';
        link.click();
    });
};