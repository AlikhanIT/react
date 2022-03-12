import Post from './MyPosts/Post'
import s from './Profile.module.css'

const Profile = () => {
	return (
		<div className={s.main}>
			<img
				className={s.phon}
				src='https://img3.akspic.ru/originals/0/3/8/1/4/141830-art-fialka-sablya-svet-anime-3840x2160.jpg'
			/>
			<div>
				<div className={s.post}>
					<img src='https://steamuserimages-a.akamaihd.net/ugc/1306556175490556969/4E0F9DF2A984E2208844614AFDFB59C8F903B7A6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' />
					<div className={s.inf}>
						<h1>Dmitry K.</h1>
						<h4>Date of Birth: 2 january</h4>
						<h4>City: Minsk</h4>
						<h4>Education: BSU'11</h4>
						<h4>
							Web Site:
							<a href='https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11'>
								https://uhub.com
							</a>
						</h4>
					</div>
				</div>
				<div className={s.newpost}>
					<h1>My posts</h1>
					<textarea placeholder='your post'></textarea>
					<button>
						<b>SEND</b>
					</button>
				</div>
				<div className={s.spost}>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	)
}

export default Profile
