let btn_record = document.querySelector(".btn-record");

btn_record.addEventListener("click", async function() {
    let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
    })

    // for better web browser support
    const mine = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
                    ? "video/webm; codecs=vp9"
                    : "video/webm"
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mine
    })

    //receive a chunck and store this when start recording
    let chunks = [];
    mediaRecorder.addEventListener('dataavailable', (e) => {
        chunks.push(e.data);
    })

    // terminate delivering chunks when stop recording
    mediaRecorder.addEventListener('stop', () => {
        let blob = new Blob(chunks, {
            type: chunks[0].type
        })

        let url = URL.createObjectURL(blob);

        let video = document.querySelector(".video-download");
        video.src = url;

        let a = document.createElement('a')
        a.href = url
        a.download = 'video.webm'
        a.click()
    })
    // 手动启动
    mediaRecorder.start()
});
