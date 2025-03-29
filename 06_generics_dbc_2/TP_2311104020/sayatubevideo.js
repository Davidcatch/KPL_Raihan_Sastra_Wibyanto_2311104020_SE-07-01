class SayaTubeVideo {
  constructor(title) {
    if (title == null || title.length > 100) {
      throw new Error('Title must not be null and must not exceed 100 characters.');
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (count > 10000000) {
      throw new Error('Play count increment must not exceed 10,000,000.');
    }

    if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
      throw new Error('Play count overflow.');
    }

    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`Video ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

try {
  const video = new SayaTubeVideo('Tutorial Design By Contract – Raihan Sastra Wibyanto');
  video.PrintVideoDetails();

  video.IncreasePlayCount(5000);
  video.PrintVideoDetails();
} catch (error) {
  console.error(error.message);
}
