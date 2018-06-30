url=$1
txt=$(node scrapeArticle.js $url)
echo "$txt" | vim - -c "set rightleft" -c "normal gqGgg"
