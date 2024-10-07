# Hacker Stories

Hacker Stories is a Next.js application that allows users to search for Hacker News stories and save them. Users can see live suggestions as they type, select stories, and manage their saved stories.

## Features

- **Debounced Search**: The search input is debounced to optimize API calls, waiting 500ms after the user stops typing before sending the request.
- **Search Suggestions**: Fetches stories from Hacker News API and shows suggestions as the user types a query of at least 3 characters.
- **Story Highlighting**: Highlights the search term in the title of the suggestions.
- **Story Selection**: Users can select and save stories from the search results, which are then displayed in a saved stories list.
- **Story Management**: Users can remove stories from the saved stories list.

## Technologies Used

- **Next.js**: Framework used for building the application.
- **React**: Frontend framework for handling UI components and hooks.
- **Hacker News API**: Used for fetching story data.
- **CSS Modules**: For styling the components.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Drakoulakou/hacker-stories.git
   ```

2. Navigate to the project folder:

   ```bash
   cd hacker-stories
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

5. Deployed on Vercel
   URL:[https://hacker-stories-wheat.vercel.app/](https://hacker-stories-wheat.vercel.app/)
