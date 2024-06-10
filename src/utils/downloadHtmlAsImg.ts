import html2canvas from "html2canvas";
export const downloadHtmlAsImg = (node: HTMLElement, name: string,scale?:number) => {
    html2canvas(node, {
        scale: scale,
        useCORS: true,
    }).then(function (canvas) {
        canvas.toBlob(function(blob:any) {
            // 创建一个a标签用于下载
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'image.png'; // 设置下载的文件名
            if(name) link.download = name;
            link.click();
            // 释放内存
            URL.revokeObjectURL(link.href);
          });
    });
};