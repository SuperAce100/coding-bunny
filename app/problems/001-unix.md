---
id: 1
title: Getting around the terminal
number: 1
dueDate: 2024-12-20
---

## Why the terminal?

In the good old days, the only thing available on your computer was the terminal, also known as the command line. To this day, while there are now more convenient ways to interact with your computer, the terminal is still one of the most powerful tools available to you for some tasks.

## Navigating around files and folders

At all times, the terminal "lives" in a folder. To see what files and folders are in the current directory, you can use the `ls` command and to print out the name of the current directory, you can use the `pwd` command. You start out in the home directory, which is represented by a `~`.

To navigate around, you can use the `cd` command. For example, `cd Desktop` will change the directory to the Desktop folder. You can also use `cd ..` to go back a directory.

To go back to the home directory, you can use `cd ~`.

Let's try it out! Navigate to the `Documents/Codes` folder we made the other day.

## Creating and deleting files and folders

To create a new file, you can use the `touch` command. For example, `touch hello.txt` will create a new file called `hello.txt`.

To create a new folder, you can use the `mkdir` command. For example, `mkdir new_folder` will create a new folder called `new_folder`.

To delete a file, you can use the `rm` command. For example, `rm hello.txt` will delete the file called `hello.txt`.

To delete a folder, you can use the `rm -r` command. For example, `rm -r new_folder` will delete the folder called `new_folder`. The `-r` flag stands for "recursive", which means that it will keep recursing on all subfolders, delete all the files and folders inside the folder.

Now, create a new folder inside of the `Documents/Codes` folder called `coding-bunny`. Navigate into it and create a new folder called `pee-poop` and inside of that folder create a new file called `hello.txt`. Say hello inside of it (you can use `open` to open the file in a text editor). Now, delete the whole folder `pee-poop` so your `coding-bunny` folder is empty again. 

This is a super short example, but it shows how you can navigate around files and folders, create new files and folders, and delete files and folders using just the terminal, which will end up being super useful in the future!
