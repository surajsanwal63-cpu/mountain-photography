* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {
font-family: Arial, sans-serif;
background: #f4f8f5;
color: #20332a;
}

header {
background: #123c32;
color: white;
padding: 20px 6%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 15px;
}

nav a {
color: white;
text-decoration: none;
margin: 8px;
}

nav a:hover {
color: #a9e6bc;
}

.hero {
min-height: 480px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: white;
padding: 40px 20px;
background:
linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.5)),
url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b")
center/cover no-repeat;
}

.hero-content h1 {
font-size: clamp(32px, 5vw, 55px);
margin-bottom: 20px;
}

.hero-content p {
font-size: 18px;
margin-bottom: 28px;
}

.btn {
display: inline-block;
background: #1b7655;
color: white;
text-decoration: none;
padding: 12px 22px;
border-radius: 6px;
margin-top: 10px;
}

.btn:hover {
background: #14563e;
}

section:not(.hero) {
padding: 55px 7%;
text-align: center;
}

section h2 {
margin-bottom: 28px;
font-size: 30px;
}

.cards {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
gap: 24px;
}

.card {
background: white;
border-radius: 12px;
overflow: hidden;
box-shadow: 0 4px 14px #00000015;
padding-bottom: 20px;
}

.card img {
width: 100%;
height: 210px;
object-fit: cover;
}

.card h3 {
margin: 16px 10px 8px;
}

.card p {
padding: 0 15px;
line-height: 1.6;
}

.gallery {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
gap: 15px;
}

.gallery img {
width: 100%;
height: 230px;
object-fit: cover;
border-radius: 10px;
transition: transform .3s;
}

.gallery img:hover {
transform: scale(1.03);
}

footer {
background: #123c32;
color: white;
text-align: center;
padding: 22px;
}

@media (max-width: 600px) {
header {
justify-content: center;
text-align: center;
}

nav {
    line-height: 2;
}

}
