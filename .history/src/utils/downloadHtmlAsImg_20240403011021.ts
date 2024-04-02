import html2canvas from "html2canvas";
export const downloadHtmlAsImg = (node: React.UIEvent) => {
    html2canvas(node).then(function (canvas) {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'node_image.png';
        link.click();
    });
};