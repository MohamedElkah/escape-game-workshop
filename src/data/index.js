export const index = {
	rooms: [
		{
			dialog: [
				{
					speaker: "Alice",
					message: "Hi, I'm Alice. I'm a software engineer at a tech company in San Francisco.",
				},
				{
					speaker: "Bob",
					message: "Hi, I'm Bob. I'm a software engineer at a tech company in San Francisco.",
				},
			],
			theme: "Harassment Identification",
			situations: [
				{
					scenario: "Alice overhears a colleague making an inappropriate comment about another team member's appearance. What should she do?",
					responses: [
						{
							is_correct: true,
							text: "Report the incident to a manager or HR, or confront the colleague if she feels safe doing so.",
						},
						{
							is_correct: false,
							text: "Ignore the situation, assuming it's just a one-time occurrence.",
						},
						{
							is_correct: false,
							text: "Laugh along to avoid any awkwardness.",
						},
						{
							is_correct: false,
							text: "Tell other colleagues about the comment to gauge their reactions.",
						},
					],
				},
				{
					scenario: "John witnesses an intern being belittled by a senior staff member. What should he do?",
					responses: [
						{
							is_correct: true,
							text: "Intervene if safe, and report the incident to HR or a manager immediately.",
						},
						{
							is_correct: false,
							text: "Stay out of it since he is not directly involved.",
						},
						{
							is_correct: false,
							text: "Confront the senior staff member aggressively.",
						},
						{
							is_correct: false,
							text: "Gossip about the situation with other colleagues.",
						},
					],
				},
			],
		},
		{
			theme: "Bystander Intervention",
			situations: [
				{
					scenario: "Bob sees a group of colleagues isolating and ignoring a new team member during lunch breaks. Why should he intervene?",
					responses: [
						{
							is_correct: true,
							text: "Creating an inclusive environment is everyone’s responsibility and intervening can help prevent potential harassment or bullying.",
						},
						{
							is_correct: false,
							text: "It’s none of his business.",
						},
						{
							is_correct: false,
							text: "The new team member probably prefers to be alone.",
						},
						{
							is_correct: false,
							text: "He should join in isolating the new member to fit in with the group.",
						},
					],
				},
				{
					scenario: "Emily witnesses a colleague being persistently interrupted and spoken over during meetings. What should she do?",
					responses: [
						{
							is_correct: true,
							text: "Support the colleague by acknowledging their points, and address the issue with the interrupters, either in the moment or privately afterwards.",
						},
						{
							is_correct: false,
							text: "Stay silent and avoid getting involved.",
						},
						{
							is_correct: false,
							text: "Start interrupting others as well to fit in.",
						},
						{
							is_correct: false,
							text: "Tell the interrupted colleague they should just speak up more.",
						},
					],
				},
			],
		},
	],
};
