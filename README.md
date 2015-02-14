# working-name
ATT Git Repo for hackathon 
TBD

---

##Installation
-----------------------------

### Install pre-req software
1. Install Cordova by running `(sudo) npm install -g cordova` (try the command first without the `sudo`)
2. Install Ionic by running `(sudo) npm install -g ionic`
3. Install the iOS Simulator command-line tool by running `(sudo) npm install -g ios-sim`

### Running the Ionic Application
1. Fork and clone this repo
2. Navigate to this project's root directory
3. Run `npm install`
4. Run `bower install`

### Run the app in the browser:

```
ionic serve
```

### Run the app in the iOS simulator:

```
ionic platform add ios
ionic build ios
ionic emulate ios
```

Git That Work Flow (for project collaborators)

1. Work on local feature branch (Do not push!)
2. Checkout into master branch `git checkout master`
3. Pull latest changes from origin `git pull`
4. Checkout into local feature branch `git checkout BRANCH-NAME`
5. Merge latest changes from master into local feature branch `git merge master`
6. Fix merge conflicts if any
7. Checkout into master branch
8. Merge your changes from your local feature branch into your master `git merge BRANCH-NAME`
9. Push your master branch to origin's master `git push`
