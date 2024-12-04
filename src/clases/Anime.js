export class Anime {
    title;
    picture_url;
    myanimelist_url;
    myanimelist_id;
    rank;
    score;
    type;
    aired_on;
    members;

    constructor(title, picture_url, myanimelist_url, myanimelist_id, rank, score, type, aired_on, members) {
        this.title = title;
        this.picture_url = picture_url;
        this.myanimelist_url = myanimelist_url;
        this.myanimelist_id = myanimelist_id;
        this.rank = rank;
        this.score = score;
        this.type = type;
        this.aired_on = aired_on;
        this.members = members;
    }

    // Getters
    getTitle() {
        return this.title;
    }

    getPictureUrl() {
        return this.picture_url;
    }

    getMyAnimeListUrl() {
        return this.myanimelist_url;
    }

    getMyAnimeListId() {
        return this.myanimelist_id;
    }

    getRank() {
        return this.rank;
    }

    getScore() {
        return this.score;
    }

    getType() {
        return this.type;
    }

    getAiredOn() {
        return this.aired_on;
    }

    getMembers() {
        return this.members;
    }

    // Setters
    setTitle(title) {
        this.title = title;
    }

    setPictureUrl(picture_url) {
        this.picture_url = picture_url;
    }

    setMyAnimeListUrl(myanimelist_url) {
        this.myanimelist_url = myanimelist_url;
    }

    setMyAnimeListId(myanimelist_id) {
        this.myanimelist_id = myanimelist_id;
    }

    setRank(rank) {
        this.rank = rank;
    }

    setScore(score) {
        this.score = score;
    }

    setType(type) {
        this.type = type;
    }

    setAiredOn(aired_on) {
        this.aired_on = aired_on;
    }

    setMembers(members) {
        this.members = members;
    }
}
