git commit --amend -m 'info' - перезаписать прошлый коммит

git branch <name branch> - создать ветку
git branch -f <name branch> <id commit> - создать ветку на коммите/перенести ветку на id commit 

git checkout <name branch> - перейти на другую ветку
git checkout -b <name branch> <id commit> - создать ветку и переключится на неё
git checkout -B <name branch> <id commit> - создать ветку(если нет)/перенести(существ) и переключится на нее
git checkout -f HEAD - очистить изменения и перейти на HEAD

git log <name branch> --oneline - информация о коммитах в ветке

git reset --hard @ - состояние на момент коммита 

git ctash - сохранить незакомитИзмен
git pop - вставить данные со stash

git rm -r --cached .idea - удалить папку из индекс

git show - показывать различия между ветками

git cherry-pick <id commit> - скопировать коммит в текущую ветку