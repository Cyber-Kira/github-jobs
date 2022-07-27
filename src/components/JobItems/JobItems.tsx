import React from 'react'
import { JobItemInterface } from '../JobItem/JobItem'
import { Pagination } from '../Pagination'

const jobs: JobItemInterface[] = [
	{
		id: 1,
		image:
			'https://media-exp2.licdn.com/dms/image/C4E0BAQGCF7FhWu0tOQ/company-logo_200_200/0/1568640033269?e=2147483647&v=beta&t=ac9c294S8l9WRwLPQ3zVphWvNZJe26WI2nh9pZcZgRw',
		employer: 'Kalisto',
		title: 'Front-End Software Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'New York',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 2,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 3,
		image:
			'data:image/png;base64,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',
		employer: 'Sesame',
		title: 'Software engineer (back end)',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'New York; Berlin',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 4,
		image: '',
		employer: 'New York University',
		title: 'Technology Solutions Developer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'New York',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 5,
		image: '',
		employer: 'Paddle',
		title: 'Senior Python Software Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'New York',
		publishedDate: '5 days ago',
		type: '',
	},
	{
		id: 6,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 7,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 8,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 9,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 10,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 11,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 12,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 13,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 14,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
	{
		id: 15,
		image:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eejcywgupogzgjjot0rd',
		employer: 'Lev',
		title: 'Senior Engineer',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, eos dolores ea dolore eligendi, quo aliquam totam perferendis omnis ipsam est eius impedit rem sapiente dolorem animi, amet aspernatur tempora mollitia? Iusto tenetur repellendus ab dolor libero enim voluptatibus consequatur aliquid eos placeat aperiam illo quod suscipit sapiente, perferendis fugit, dolores mollitia omnis sit esse? Unde eveniet eaque vitae molestias at laboriosam sunt! Nam modi laudantium earum fugiat asperiores, ipsa assumenda eum error dignissimos reiciendis dicta, cupiditate architecto sunt vero, voluptates iusto hic quod dolorum illo exercitationem. Blanditiis libero delectus atque perferendis laborum, itaque quidem odit quasi quo quae.',
		location: 'NY or LA',
		publishedDate: '5 days ago',
		type: 'Full time',
	},
]

export const JobItems = () => {
	return <Pagination projects={jobs} itemsPerPage={5} />
}
