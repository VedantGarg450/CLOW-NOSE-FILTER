function preload(){

}
function setup(){
  canvas= createCanvas(600, 600)
  canvas.center()
  video= createCapture(VIDEO)
  video.hide()
}
function draw(){
    image(video, 00, 00, 600, 600)
}