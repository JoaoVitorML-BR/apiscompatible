const { createReadStream } = require("fs");
const { spawn } = require("child_process");

exports.ProcessingVideo = (req, res) => {
  const videoPath = "./videos/howuse.mp4";
  const ffmpegProcess = spawn("ffmpeg", [
    "-i", "pipe:0",
    "-f", "mp4",
    "-vcodec", "h264",
    "-acodec", "aac",
    "-movflags", "frag_keyframe+empty_moov+default_base_moof",
    "-b:v", "1500k",
    "-maxrate", "1500k",
    "-bufsize", "1000k",
    "-f", "mp4",
    "-vf", "monochrome,drawtext=text='':x=10:y=H-th-10:fontsize=50:fontcolor=yellow:shadowcolor=black:shadowx=5:shadowy=5",
    "pipe:1"
  ], {
    stdio: ["pipe", "pipe", "pipe"]
  });

  // Iniciar o processo de stream do vídeo
  createReadStream(videoPath).pipe(ffmpegProcess.stdin);

  // Enviar os dados de saída do processo do FFMPEG para o cliente
  ffmpegProcess.stdout.pipe(res);

  ffmpegProcess.stderr.on('data', (data) => {
    console.error(`FFMPEG error: ${data}`);
  });
  

  // Gerenciar a finalização do processo de streaming
  req.on("close", () => {
    ffmpegProcess.stdout.destroy();
    ffmpegProcess.stdin.destroy();
    console.log("Client disconnected, killing FFMPEG process...");
    ffmpegProcess.kill();
  });
};
