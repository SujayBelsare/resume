document.addEventListener('DOMContentLoaded', function() {
    var likeBtn = document.getElementById('likeBtn');
    var likeCountElement = document.getElementById('likeCount');

    var likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    var isLiked = localStorage.getItem('isLiked') === 'true';

    likeCountElement.innerText = 'LIKE COUNT: ' + likeCount;
    likeBtn.innerText = isLiked ? 'UNLIKE' : 'LIKE';

    likeBtn.addEventListener('click', function() {
        if (isLiked) {
            likeCount -= 1;
            localStorage.setItem('isLiked', 'false');
        } else {
            likeCount += 1;
            localStorage.setItem('isLiked', 'true');
        }

        likeCountElement.innerText = 'LIKE COUNT: ' + likeCount;
        likeBtn.innerText = isLiked ? 'LIKE' : 'UNLIKE';

        localStorage.setItem('likeCount', likeCount);
        isLiked = !isLiked;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var likeBtn = document.getElementById('likeBtn-2');
    var likeCountElement = document.getElementById('likeCount-2');

    var likeCount = parseInt(localStorage.getItem('likeCount-2')) || 0;
    var isLiked = localStorage.getItem('isLiked-2') === 'true';

    likeCountElement.innerText = 'LIKE COUNT: ' + likeCount;
    likeBtn.innerText = isLiked ? 'UNLIKE' : 'LIKE';

    likeBtn.addEventListener('click', function() {
        if (isLiked) {
            likeCount -= 1;
            localStorage.setItem('isLiked-2', 'false');
        } else {
            likeCount += 1;
            localStorage.setItem('isLiked-2', 'true');
        }

        likeCountElement.innerText = 'LIKE COUNT: ' + likeCount;
        likeBtn.innerText = isLiked ? 'LIKE' : 'UNLIKE';

        localStorage.setItem('likeCount-2', likeCount);
        isLiked = !isLiked;
    });
});
