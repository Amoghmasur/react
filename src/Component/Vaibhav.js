import React from 'react'


export default function Vaibhav() {
  return (
    <div>
<body>
	
	<header>
		<h1>Task List 2023</h1>
		<form id="new-task-form">
			<input 
				type="text" 
				name="new-task-input" 
				id="new-task-input" 
				placeholder="What do you have planned?" />
			<input 
				type="submit"
				id="new-task-submit" 
				value="Add task" />
		</form>
	</header>
	<main>
		<section class="task-list">
			<h2>Tasks</h2>

			<p id="tasks">
                 {/* <p class="task">
					<p class="content">
						<input 
							type="text" 
							class="text" 
							value="A new task"
							readonly/>
					</p>
					<p class="actions">
						<button class="edit">Edit</button>
						<button class="delete">Delete</button>
					</p>
				</p>   */}

			</p>
		</section>
	</main>
</body>
  

    </div>
  )
}
