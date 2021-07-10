export default function sortFunction(a,b){
    var dateA = new Date(a.pubDate).getTime();
    var dateB = new Date(b.pubDate).getTime();
    return dateA < dateB ? 1 : -1;
};
