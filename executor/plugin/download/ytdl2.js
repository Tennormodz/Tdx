
const yts = require("yt-search");

module.exports = {
  type: 'search',
  command: ['playdoc', 'play2'],
  operate: async (context) => {
    const { q, tdx, m, xreply, reaction, createDocument } = context;

    if (!q) {
      await xreply('Add Input !!!\n\n*Example: porn gay video*');
      await reaction(m.chat, '❗');
      return;
    }

    try {
      await reaction(m.chat, '⬇️');

      let searchResults = await yts(q);
      let videos = searchResults.videos.slice(0, 6);

      let documentResults = [];

      for (let video of videos) {
        let title = video.title;
        let link = video.url;

        documentResults.push({
          fileName: title + '.pdf',
          buffer: Buffer.from(`Title: ${title}\n\nLink: ${link}`)
        });
      }

      await createDocument(documentResults);

      await reaction(m.chat, '✅');
    } catch (error) {
      console.error('Error:', error);
      await xreply('Failed to download media. Please try again later.');
      await reaction(m.chat, '❌');
    }
  }
};
