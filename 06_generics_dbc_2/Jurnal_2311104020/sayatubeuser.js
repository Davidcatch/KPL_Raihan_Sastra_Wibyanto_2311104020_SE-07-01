class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== 'string' || title.length === 0 || title.length > 100) {
      throw new Error('Title harus berupa string, tidak boleh kosong, dan maksimal 100 karakter');
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== 'number' || count < 0 || count > 10000000) {
      throw new Error('Play count harus berupa angka positif dan maksimal 10.000.000');
    }
    try {
      let newPlayCount = this.playCount + count;
      if (newPlayCount > Number.MAX_SAFE_INTEGER) {
        throw new Error('Integer overflow: Play count melebihi batas maksimal');
      }
      this.playCount = newPlayCount;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  PrintVideoDetails() {
    console.log(`Video ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

class SayaTubeUser {
  constructor(username) {
    if (typeof username !== 'string' || username.length === 0 || username.length > 100) {
      throw new Error('Username harus berupa string, tidak boleh kosong, dan maksimal 100 karakter');
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.username = username;
    this.uploadedVideos = [];
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  AddVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error('Hanya objek dari SayaTubeVideo yang dapat ditambahkan');
    }
    this.uploadedVideos.push(video);
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

const user = new SayaTubeUser('Raihan');
const movies = ['Inception', 'Interstellar', 'The Dark Knight', 'Parasite', 'Avengers: Endgame', 'The Matrix', 'Fight Club', 'The Godfather', 'Pulp Fiction', 'Forrest Gump'];

movies.forEach((movie) => {
  let video = new SayaTubeVideo(`Review Film ${movie} oleh Raihan`);
  user.AddVideo(video);
});

user.PrintAllVideoPlaycount();
