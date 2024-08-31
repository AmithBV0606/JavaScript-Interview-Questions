// Creating your first class

class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
  }

  intro() {
    return `Hey, Its ${this.name}! Welcome to ${this.channel}`;
  }

  like() {
    this.videoLikes++;
    return `Liked this video! Current likes: ${this.videoLikes}`;
  }
}

const roadsidecoder = new Teacher("Piyush", "RoadsideCoder");
// console.log(roadsidecoder);

// Inheritance in classes

class YouTubeTeacher extends Teacher {
  constructor(name, channel, likes, subscribers) {
    super(name, channel, likes);
    this.subscribers = subscribers;
  }

  static paidCourse() {
    // console.log(this.subscribers); // Cannot access
    return new YouTubeTeacher("Piyush", "RoadsideCoder", 69, "90k");
  }

  subscribersCount() {
    return `${this.channel} has ${this.subscribers} subscribers.`;
  }
}

const ytTeacher = new YouTubeTeacher("Piyush", "RoadsideCoder", 69, "90k")
console.log(ytTeacher)

console.log(YouTubeTeacher.paidCourse());