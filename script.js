const postContent = document.getElementById('post-content');
const postButton = document.getElementById('post-button');
const postList = document.getElementById('post-list');

postButton.addEventListener('click', function() {
	const content = postContent.value;
	if (content.trim() === '') {
		return;
	}
	
	const post = document.createElement('div');
	post.className = 'post';
	const p = document.createElement('p');
	p.textContent = content;
	post.appendChild(p);
	postList.prepend(post);
	
	postContent.value = '';

	const commentButton = document.createElement('button');
	commentButton.id = 'comment-button'
	commentButton.textContent = 'Commentaire'
	post.appendChild(commentButton);

	commentButton.addEventListener('click', function() {
		const commentsDiv = document.createElement('div');
		commentsDiv.className = 'comments';
		const commentsHeader = document.createElement('h3');
		commentsHeader.textContent = 'Commentaires';
		commentsDiv.appendChild(commentsHeader);

		const content = postContent.value;
		if (content.trim() === '') {
			return;
		}
	})
});


function myFunc() {
	window.location.href = "index.html";
}