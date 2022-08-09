import { defineStore } from "pinia";
import axios from "axios";
const domParser = new DOMParser();

// https://www.theverge.com/rss/index.xml

export const useFeedStore = defineStore({
  id: "feedStore",
  state: () => {
    return {
      sources: [
        {
          id: crypto.randomUUID,
          name: "Mozilla",
          url: "https://hacks.mozilla.org/feed",
        },
      ],
      current: {
        source: null,
        items: null,
      },
    };
  },
  actions: {
    async loadSource(source) {
      const { data } = await axios.get(source.url);
      let text = data.replace(/content:encoded/g, "content");

      let doc = domParser.parseFromString(text, "text/xml");
      const posts = [];
      doc.querySelectorAll("item, entry").forEach((item) => {
        let post = {
          title: item.querySelector("title").textContent ?? "sin titulo",
          content: item.querySelector("content").textContent ?? " ",
        };
        posts.push(post);
      });
      this.current.items = [...posts];
      this.current.source = source;
    },
    async registerNewSource(url) {
      try {
        const { data } = await axios.get(url);
        let doc = domParser.parseFromString(data, "text/xml");

        const { textContent } = doc.querySelector("channel title, feed title");
        const source = {
          id: crypto.randomUUID,
          name: textContent,
          url,
        };
        this.sources.push(source);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
