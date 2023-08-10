# Atelier
Amelia - Victor - Heith

Begin
-----------------------------------
1. clone your project(repo) as usual
```
git clone [url]
```

Create Branch
-----------------------------------
2. Update the master, staging and/or feature branches to latest version(s)
```
git pull
```
to keep the fork synchronized with the repo

3. Create branch
```
git checkout -b [name of branch]
```
to create a "feature" brance to keep it away from the
main branch, which keeps the work isolated and organized.
short descriptive name
prefixed with initials (eg. tjk_branch_name)

Make Changes
------------------------------------
4. Make change
```
git add .
git commit -m "insert your DESCRIPTIVE comment here"
```

5. Test
Run full test suite locally
6. Commit with descriptive name


Push changes
------------------------------------
7. Pull master for any changes
```
git pull
```
(if there is a conflict see section on merge conflict)

8. push to remote branch
!!! NEVER PUSH TO MAIN, only push to your branch !!!
```
git push -u origin [name of branch]
```

Pull Request
------------------------------------

9. !!!   make sure the master branch is not set to hack reactor   !!!

FROM San-Pallegrino-Trio-Stars/atelier_project TO San-Pallegrino-Trio-Stars/atelier_project + branch name

10. Open pull request into a staging or feature branch
Longer descriptive title of taskBef
Bullet points with descriptions of changes (changelog)


Merge Conflict
------------------------------------
11. Before every merge, at least one group member other than the one who made the pull request should review the pull request. Once approved, the changes can be merged into the main branch of the organization repository.




From within the root directory:

```sh
npm install -g webpack
npm install
```

