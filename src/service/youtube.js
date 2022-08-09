class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  // async mostPopular() {
  //   const response = await fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${this.key}`,
  //     this.getRequestOptions
  //   );
  //   const result = await response.json();
  //   return result.items;
  // }

  mostPopular() {
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyD5PE2WWsgT2UMXlyCT4GxWB_baAHfVcK0",
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  // async search(query) {
  //   const response = await fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=${this.key}`,
  //     this.getRequestOptions
  //   );
  //   const result = await response.json();
  //   return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  // }

  search() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyD5PE2WWsgT2UMXlyCT4GxWB_baAHfVcK0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
