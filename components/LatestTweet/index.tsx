
export function LatestTweet() {
  return (
    <div className="LatestTweet">
      <a className="twitter-timeline" data-lang="pt" data-theme="light" data-tweet-limit="1" href="https://twitter.com/6uilhermeLeite?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js"></script>
      <div className="LatestTweet-bottom"></div>
    </div>
  )
}