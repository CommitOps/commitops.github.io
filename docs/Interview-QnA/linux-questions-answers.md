---
title: Linux QnA
---

# Linux Questions and Answers

???+ question "Give some examples of Linux distribution. What is your favorite distro and why?"

    - Red Hat Enterprise Linux  
    - Fedora  
    - CentOS  
    - Debian  
    - Ubuntu  
    - Mint  
    - SUSE Linux Enterprise Server (SLES)  
    - SUSE Linux Enterprise Desktop (SLED)  
    - Slackware  
    - Arch  
    - Kali  
    - Backbox  

    **My favorite Linux distribution:**

    - **Arch Linux**, which offers a nice minimalist base system on which one can build a custom operating system. The beauty of it too is that it has the Arch User Repository (AUR), which when combined with its official binary repositories allows it to probably have the largest repositories of any distribution. Its packaging process is also very simple, which means if one wants a package not in its official repositories or the AUR, it should be easy to make it for oneself.  
    - **Linux Mint**, which is also built from Ubuntu LTS releases, but features editions featuring a few different desktop environments, including Cinnamon, MATE and Xfce. Mint is quite polished and its aesthetics are rather appealing, I especially like its new icon theme, although I do quite dislike its GTK+ theme (too bland to my taste). I’ve also found a bug in its latest release Mint 19, that is getting quite irritating as I asked for with it over a fortnight ago on their forums and I have received no replies so far and it is a bug that makes my life on it more difficult.  
    - **Kali Linux**, is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing. Kali contains several hundred tools which are geared towards various information security tasks, such as Penetration Testing, Security research, Computer Forensics and Reverse Engineering.  

    **Useful resources:**

    - [List of Linux distributions](https://en.wikipedia.org/wiki/List_of_Linux_distributions)  
    - [What is your favorite Linux distro and why?](https://www.quora.com/What-is-your-favorite-Linux-distro-and-why)

???+ question "What are the differences between Unix, Linux, BSD, and GNU?"

    **GNU** isn't really an OS. It's more of a set of rules or philosophies that govern free software, that at the same time gave birth to a bunch of tools while trying to create an OS. So **GNU** tools are basically open versions of tools that already existed, but were reimplemented to conform to principles of open software. **GNU/Linux** is a mesh of those tools and the **Linux kernel** to form a complete OS, but there are other GNUs, e.g. **GNU/Hurd**.

    **Unix** and **BSD** are "older" implementations of POSIX that are various levels of "closed source". **Unix** is usually totally closed source, but there are as many flavors of **Unix** as there are **Linux** (if not more). **BSD** is not usually considered "open", but it was considered to be very open when it was released. Its licensing also allowed for commercial use with far fewer restrictions than the more "open" licenses of the time allowed.

    **Linux** is the newest of the four. Strictly speaking, it's "just a kernel"; however, in general, it's thought of as a full OS when combined with GNU Tools and several other core components.

    The main governing differences between these are their ideals. **Unix**, **Linux**, and **BSD** have different ideals that they implement. They are all POSIX, and are all basically interchangeable. They do solve some of the same problems in different ways. So other than ideals and how they choose to implement POSIX standards, there is little difference.

    For more info I suggest you read a brief article on the creation of **GNU**, **OSS**, **Linux**, **BSD**, and **UNIX**. They will be slanted towards their individual ideas, but those articles should give you a better idea of the differences.

    **Useful resources:**

    - [What is the difference between Unix, Linux, BSD and GNU? (original)](https://unix.stackexchange.com/questions/104714/what-is-the-difference-between-unix-linux-bsd-and-gnu)
    - [The Great Debate: Is it Linux or GNU/Linux?](https://www.howtogeek.com/139287/the-great-debate-is-it-linux-or-gnulinux/)


???+ question "What is a CLI? Tell me about your favorite CLI tools, tips, and hacks."

    **CLI** is an acronym for Command Line Interface or Command Language Interpreter. The command line is one of the most powerful ways to control your system/computer.

    In Unix-like systems, **CLI** is the interface by which a user can type commands for the system to execute. The **CLI** is very powerful, but is not very error-tolerant.

    The **CLI** allows you to do manipulations with your system’s internals and with code in a much more fine-tuned way. It offers greater flexibility and control than a GUI regardless of what OS is used. Many programs that you might want to use in your software that are hosted on say GitHub also require running some commands on the **CLI** in order to get them running.

    **My favorite tools**

    - `screen` — free terminal multiplexer, I can start a session and my terminals will be saved even when the connection is lost, so I can resume later or from home  
    - `ssh` — the most valuable overall command to learn, I can use it to do some amazing things:  
      * mount a file system over the internet with `sshfs`  
      * forward commands: run against an `rsync` server with no `rsync` daemon by starting one itself via ssh  
      * run in batch files: I can redirect the output from the remote command and use it within a local batch file  
    - `vi/vim` — the most popular and powerful text editor, it's universal and works very fast, even on large files  
    - `bash-completion` — contains a number of predefined completion rules for the shell  

    **Tips & Hacks**

    - search the command history with `CTRL + R`  
    - `popd/pushd` and other shell built-ins to manipulate the directory stack  
    - editing keyboard shortcuts like `CTRL + U`, `CTRL + E`  
    - combinations that will be auto-expanded:  
      * `!*` — all arguments of the last command  
      * `!!` — the whole of the last command  
      * `!ssh` — last command starting with ssh  

    **Useful resources:**

    - [Command Line Interface Definition](http://www.linfo.org/command_line_interface.html)  
    - [What is your single most favorite command-line trick using Bash?](https://stackoverflow.com/questions/68372/what-is-your-single-most-favorite-command-line-trick-using-bash/69716)  
    - [What are your favorite command line features or tricks?](https://unix.stackexchange.com/questions/6/what-are-your-favorite-command-line-features-or-tricks)

???+ question "What is your favorite shell and why?"

    **BASH** is my favorite. It’s really a preferential kind of thing, where I love the syntax and it just "clicks" for me. The input/output redirection syntax (`>>`, `<< 2>&1`, `2>`, `1>`, etc.) is similar to C++ which makes it easier for me to recognize.

    I also like the **ZSH** shell, because it is much more customizable than **BASH**. It has the Oh-My-Zsh framework, powerful context-based tab completion, pattern matching/globbing on steroids, loadable modules, and more.

    **Useful resources:**
    - [Comparison of command shells](https://en.wikipedia.org/wiki/Comparison_of_command_shells)

---

???+ question "How do you get help on the command line? \*\*\*"

    - `man [commandname]` can be used to see a description of a command (e.g., `man less`, `man cat`)  
    - `-h` or `--help` — some programs print instructions when passed this parameter (e.g., `python -h` and `python --help`)

---

???+ question "Your first 5 commands on a *nix server after login."

    - `w` — displays useful information like server uptime and logged-in users  
    - `top` — shows running processes, sortable by CPU, memory utilization, and more  
    - `netstat` — shows which ports/IPs your server is listening on and which processes are using them  
    - `df` — reports available disk space for file systems  
    - `history` — shows previously executed commands by the current user  

    **Useful resources:**
    - [First 5 Commands When I Connect on a Linux Server (original)](https://www.linux.com/blog/first-5-commands-when-i-connect-linux-server)

---

???+ question "What do the fields in `ls -al` output mean?"

    In the order of output:

    ```bash
    -rwxrw-r--    1    root   root 2048    Jan 13 07:11 db.dump
    ```

    - File permissions  
    - Number of links  
    - Owner name  
    - Owner group  
    - File size  
    - Time of last modification  
    - File/directory name  

    **File permissions explained:**

    - First character:  
      - `-` for a regular file  
      - `d` for a directory  
      - `l` for a symlink (soft link)  

    - Next nine characters represent permissions in sets of three:  
      - `r` = readable  
      - `w` = writable  
      - `x` = executable  

    Example: `-rwxrw-r--`

    - Regular file (`-`)  
    - Owner: read, write, execute (`rwx`)  
    - Group: read, write (`rw-`)  
    - Others: read-only (`r--`)  

    **Useful resources:**
    - [What do the fields in ls -al output mean? (original)](https://unix.stackexchange.com/questions/103114/what-do-the-fields-in-ls-al-output-mean)


???+ question "How do you get a list of logged-in users?"

    For a summary of logged-in users, including each login of a username, the terminal users are attached to, the date/time they logged in, and possibly the computer from which they are making the connection, enter:

    ```bash
    # It uses /var/run/utmp and /var/log/wtmp files to get the details.
    who
    ```

    For extensive information, including username, terminal, IP number of the source computer, the time the login began, any idle time, process CPU cycles, job CPU cycles, and the currently running command, enter:

    ```bash
    # It uses /var/run/utmp, and their processes /proc.
    w
    ```

    Also important for displaying a list of last logged-in users, enter:

    ```bash
    # It uses /var/log/wtmp.
    last
    ```

    **Useful resources:**
    - [4 Ways to Identify Who is Logged-In on Your Linux System](https://www.thegeekstuff.com/2009/03/4-ways-to-identify-who-is-logged-in-on-your-linux-system/)

---

???+ question "What is the advantage of executing the running processes in the background? How can you do that?"

    The most significant advantage of executing a process in the background is that you can perform other tasks simultaneously. More processes can be completed while you are working on different things. This can be done by appending an ampersand (`&`) at the end of the command.

    Typically, applications that take a long time and don't need user interaction are run in the background.

    Example — downloading a file in the background:

    ```bash
    wget https://url-to-download.com/download.tar.gz &
    ```

    Output:

    ```bash
    [1] 2203
    ```

    Here `1` is the job number and `2203` is the process ID (PID).

    To see background jobs:

    ```bash
    jobs
    ```

    To bring a job to the foreground:

    ```bash
    fg
    ```

    For multiple background jobs:

    ```bash
    fg %1  # or %2, etc.
    ```

    To terminate a background process:

    ```bash
    kill PID
    ```

    **Useful resources:**
    - [How do I run a Unix process in the background?](https://kb.iu.edu/d/afnz)
    - [Job Control Commands](http://tldp.org/LDP/abs/html/x9644.html)
    - [What is/are the advantage(s) of running applications in background?](https://unix.stackexchange.com/questions/162186/what-is-are-the-advantages-of-running-applications-in-backgound)

---

???+ question "Before you can manage processes, you must be able to identify them. Which tools will you use? \*\*\*"

    To be completed.

???+ question "Running the command as root user. Is it a good or bad practice?"

    Running everything as root is **bad practice** due to several key reasons:

    - **Stupidity**: No safeguards prevent critical mistakes. Using `sudo` forces a pause, giving you a chance to catch errors before they execute.
    - **Security**: If you don't use the root account directly, attackers must guess both username and password, increasing security.
    - **You don't need it**: 
      - Temporarily become root: `sudo -i`
      - Use `sudo` with pipes: `sudo sh -c "command1 | command2"`
    - **Recovery safety**: Even if root is needed, the recovery console is available for emergencies.

    **Useful resources:**
    - [Why is it bad to log in as root?](https://askubuntu.com/questions/16178/why-is-it-bad-to-log-in-as-root)
    - [What's wrong with always being root?](https://serverfault.com/questions/57962/whats-wrong-with-always-being-root)
    - [Why you should avoid running applications as root](https://bencane.com/2012/02/20/why-you-should-avoid-running-applications-as-root/)

---

???+ question "How to check memory stats and CPU stats?"

    Use the following tools:

    - `top` / `htop`: Real-time view of processes and system resource usage.
    - `free`: Displays physical memory usage.
    - `vmstat`: Reports on virtual memory.
    - `sar`: Collects, reports, and saves system activity info (CPU, memory, etc.) – not always installed by default.

    **Useful resources:**
    - [How do I Find Out Linux CPU Utilization?](https://www.cyberciti.biz/tips/how-do-i-find-out-linux-cpu-utilization.html)
    - [16 Linux server monitoring commands you really need to know](https://www.hpe.com/us/en/insights/articles/16-linux-server-monitoring-commands-you-really-need-to-know-1703.html)

---

???+ question "What is load average?"

    **Load average** shows the system demand — the average number of threads (running + waiting) over 1, 5, and 15 minutes.

    - Not per-CPU, but overall.
    - A value of `1.0` on a single-core system means full utilization.
    - Values > number of cores = potential performance bottlenecks.

    Interpretations:
    - `0.0`: System idle
    - 1-min > 5/15-min: Load increasing
    - 1-min < 5/15-min: Load decreasing
    - Higher than CPU core count: Could be overloaded

    **Useful resources:**
    - [Linux Load Averages: Solving the Mystery](http://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html)
    - [Linux load average - the definitive summary](http://blog.angulosolido.pt/2015/04/linux-load-average-definitive-summary.html)
    - [How CPU load averages work](https://jvns.ca/blog/2016/02/07/cpu-load-averages/)

---

???+ question "Where is my password stored on Linux/Unix?"

    Passwords themselves are **not** stored. Instead, **hashes** are stored in:

    - `/etc/shadow`: Contains secure password hashes (restricted access)
    - `/etc/passwd`: Contains basic user info; password field contains a `*` or `x` when shadow file is used.

    A hash is a **one-way function**; you can't recover the original password from the hash.

    **For more details**:
    - `man crypt`
    - `man shadow`
    - `man passwd`

    **Useful resources:**
    - [Where is my password stored on Linux?](https://security.stackexchange.com/questions/37050/where-is-my-password-stored-on-linux)
    - [Where are the passwords of the users located in Linux?](https://www.cyberciti.biz/faq/where-are-the-passwords-of-the-users-located-in-linux/)
    - [Linux Password & Shadow File Formats](https://www.tldp.org/LDP/lame/LAME/linux-admin-made-easy/shadow-file-formats.html)

???+ question "How to recursively change permissions for all directories except files and for all files except directories?"

    To change permissions recursively:

    - Change all directories to **755** (`drwxr-xr-x`):
      ```bash
      find /opt/data -type d -exec chmod 755 {} \;
      ```

    - Change all files to **644** (`-rw-r--r--`):
      ```bash
      find /opt/data -type f -exec chmod 644 {} \;
      ```

    **Useful resource:**
    - [How do I set chmod for a folder and all of its subfolders and files?](https://stackoverflow.com/questions/3740152/how-do-i-set-chmod-for-a-folder-and-all-of-its-subfolders-and-files?rq=1)

---

???+ question "Every command fails with `command not found`. How to trace the source of the error and resolve it?"

    Likely, the `PATH` environment variable has been overwritten or cleared.

    **Debug Steps:**

    - View current PATH:
      ```bash
      echo $PATH
      ```

    - Start shell with debug mode:
      ```bash
      bash --login -x
      ```

    - Temporarily fix PATH:
      ```bash
      PATH=/bin:/sbin:/usr/bin:/usr/sbin
      export PATH
      ```

    - Fix permanently in `~/.bash_profile` (or `~/.profile`), not `~/.bashrc`.

    **Useful resource:**
    - [How to correctly add a path to PATH?](https://unix.stackexchange.com/questions/26047/how-to-correctly-add-a-path-to-path)

---

???+ question "You're typing `CTRL + C` but your script is still running. How do you stop it?"

    If `CTRL + C` does not terminate the process, try the following:

    1. Identify the process:
       ```bash
       ps aux | grep scriptname
       ```

    2. Kill it using:
       ```bash
       kill <pid>
       ```

    3. If it still doesn’t stop:
       ```bash
       kill -9 <pid>
       ```

    This sends a `SIGKILL` signal, which cannot be ignored.

    **Useful resources:**
    - [How to kill a script running in terminal, without closing terminal (Ctrl + C doesn't work)?](https://askubuntu.com/questions/520107/how-to-kill-a-script-running-in-terminal-without-closing-terminal-ctrl-c-doe)
    - [What's the difference between ^C and ^D for Unix/Mac OS X terminal?](https://superuser.com/questions/169051/whats-the-difference-between-c-and-d-for-unix-mac-os-x-terminal)

---

???+ question "What is `grep` command? How to match multiple strings in the same line?"

    `grep` is a command-line utility that searches for patterns within text.

    **To match multiple strings in the same line:**

    - Using extended regex (requires `-E`):
      ```bash
      grep -E "string1|string2" filename
      ```

    - Using multiple `-e` options:
      ```bash
      grep -e "string1" -e "string2" filename
      ```

    **Useful resource:**
    - [What is grep, and how do I use it?](https://kb.iu.edu/d/afiy)

---

???+ question "Explain the file content commands along with the description."

    - `head`: Displays the beginning of a file.
    - `tail`: Displays the end of a file.
    - `cat`: Concatenates and displays file contents.
    - `more`: Paginates output; forward-only viewing.
    - `less`: Improved pager allowing backward and forward navigation.

    **Useful resource:**
    - [Viewing text files from the shell prompt](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-viewingtext-terminal.html)

---

???+ question "SIGHUP, SIGINT, SIGKILL, and SIGTERM POSIX signals. Explain."

    - **SIGHUP**: Sent when a terminal closes. Many daemons reload config instead of exiting.
    - **SIGINT**: Sent on `Ctrl+C`, interrupts the process.
    - **SIGKILL**: Force kill, cannot be caught or ignored.
    - **SIGTERM**: Graceful termination. Can be caught and handled for cleanup.

    **Useful resources:**
    - [POSIX signals](https://dsa.cs.tsinghua.edu.cn/oj/static/unix_signal.html)
    - [Introduction To Unix Signals Programming](http://titania.ctie.monash.edu.au/signals/)


???+ question "What does `kill` command do?"

    In Unix-like systems, `kill` sends a signal to a process. By default, it sends the `SIGTERM` (termination) signal.

    While commonly used to stop processes, `kill` can send any signal, including custom ones.

    **Useful resource:**
    - [Mastering the "Kill" Command in Linux](https://www.maketecheasier.com/kill-command-in-linux/)

---

???+ question "What is the difference between `rm` and `rm -rf`?"

    - `rm`: Deletes files only (not directories).
    - `rm -rf`: Recursively and forcefully deletes directories and their contents.

    Flags:
    - `-r`: Recursive deletion.
    - `-f`: Force deletion without prompting.

    **Useful resource:**
    - [Difference between `rm -r` and `rm -f`](https://superuser.com/questions/1126206/what-is-the-difference-between-rm-r-and-rm-f)

---

???+ question "How do I `grep` recursively? Explain on several examples."

    To recursively search directories using `grep`, use the `-r` (or `--recursive`) flag:

    ```bash
    grep -r "pattern" /path/to/search
    ```

    **Examples:**

    - Search all `.txt` files in current directory:
      ```bash
      grep -r --include="*.txt" "error" .
      ```

    - Exclude certain directories:
      ```bash
      grep -r --exclude-dir={.git,node_modules} "TODO" .
      ```

    - Case-insensitive recursive search:
      ```bash
      grep -ri "searchterm" .
      ```

---

???+ question "`archive.tgz` has ~30 GB. How do you list content of it and extract only one file?"

    - **List contents:**
      ```bash
      tar tf archive.tgz
      ```

    - **Extract a single file:**
      ```bash
      tar xf archive.tgz path/to/file.txt
      ```

    **Useful resources:**
    - [List tar contents](https://www.cyberciti.biz/faq/list-the-contents-of-a-tar-or-targz-file/)
    - [Extract specific files from tar.gz](https://unix.stackexchange.com/questions/61461/how-to-extract-specific-files-from-tar-gz)

---

???+ question "Execute combine multiple shell commands in one line."

    - **Run next command only if previous succeeds:**
      ```bash
      cd /my_folder && rm *.jar && svn co path && mvn compile package install
      ```

    - **Run all regardless of success:**
      ```bash
      cd /my_folder; rm *.jar; svn co path; mvn compile package install
      ```

    - **Using a script:**
      ```bash
      #!/bin/sh
      cd /my_folder \
      && rm *.jar \
      && svn co path \
      && mvn compile package install
      ```

    **Useful resource:**
    - [Combining commands in Linux](https://stackoverflow.com/questions/13077241/execute-combine-multiple-linux-commands-in-one-line)

---

???+ question "What symbolic representation can you pass to `chmod` to give all users execute access to a file without affecting other permissions?"

    Use the following command:

    ```bash
    chmod a+x /path/to/file
    ```

    - `a`: all users
    - `+x`: add execute permission

    **Useful resources:**
    - [chmod basics](https://www.washington.edu/computing/unix/permissions.html)
    - [chmod +x explanation](https://askubuntu.com/questions/443789/what-does-chmod-x-filename-do-and-how-do-i-use-it)

---

???+ question "How can I sync two local directories?"

    Use `rsync` to sync contents from **dir1** to **dir2**:

    ```bash
    rsync -av --progress --delete dir1/ dir2/
    ```

    Options:
    - `-a`: archive mode (preserves permissions, timestamps, etc.)
    - `--delete`: remove files in target that aren’t in source
    - `--progress`: show progress
    - `-v`: verbose

    **Useful resources:**
    - [How to sync local directories](https://unix.stackexchange.com/questions/392536/how-can-i-sync-two-local-directories)
    - [Synchronizing folders with rsync](https://www.jveweb.net/en/archives/2010/11/synchronizing-folders-with-rsync.html)

---

???+ question "Many basic maintenance tasks require you to edit config files. Explain ways to undo the changes you make."

    Ways to undo config file changes:

    - Make manual backups before editing:
      ```bash
      cp filename{,.bak}
      ```

    - Use `tar`, `rsync`, or `cp` to back up directories.

    - Configure your text editor to auto-backup files.

    - **Best practice**: use version control like `git` or tools like `etckeeper` to track changes.

    **Useful resources:**
    - [Backup before filename extension](https://unix.stackexchange.com/questions/66376/backup-file-with-bak-before-filename-extension)
    - [Version controlling config files with git](https://superuser.com/questions/1037211/is-it-a-good-idea-to-use-git-for-configuration-file-version-controlling)

---

???+ question "You have to find all files larger than 20MB. How do you do it?"

    Use `find` to locate large files:

    ```bash
    find / -type f -size +20M
    ```

    - `-type f`: search for files only
    - `-size +20M`: larger than 20 megabytes

    **Useful resource:**
    - [Find files by size](https://superuser.com/questions/204564/how-can-i-find-files-that-are-bigger-smaller-than-x-bytes)

---

???+ question "Why do we use `sudo su -` and not just `sudo su`?"

    - `sudo su`: switches to root but retains current user’s environment.
    - `sudo su -`: gives a **login shell** for root, resetting the environment as if you logged in as root.

    This ensures paths, variables, and user settings are correctly initialized for root.

    **Useful resources:**
    - [su vs sudo -s vs sudo -i](https://unix.stackexchange.com/questions/35338/su-vs-sudo-s-vs-sudo-i-vs-sudo-bash)
    - [Why use `su -`?](https://unix.stackexchange.com/questions/7013/why-do-we-use-su-and-not-just-su)

???+ question "How to find files that have been modified on your system in the past 60 minutes?"
    ```bash
    find / -mmin -60 -type f
    ```
    Useful resources:

    - [Get all files modified in last 30 days in a directory (original)](https://stackoverflow.com/questions/23070245/get-all-files-modified-in-last-30-days-in-a-directory)

???+ question "What are the main reasons for keeping old log files?"
    They are essential to investigate issues on the system. **Log management** is absolutely critical for IT security.

    Servers, firewalls, and other IT equipment keep log files that record important events and transactions. This information can provide important clues about hostile activity affecting your network from within and without. Log data can also provide information for identifying and troubleshooting equipment problems including configuration problems and hardware failure.

    It’s your server’s record of who’s come to your site, when, and exactly what they looked at. It’s incredibly detailed, showing:

    - where folks came from
    - what browser they were using
    - exactly which files they looked at
    - how long it took to load each file
    - and a whole bunch of other nerdy stuff

    Factors to consider:

    - legal requirements for retention or destruction
    - company policies for retention and destruction
    - how long the logs are useful
    - what questions you're hoping to answer from the logs
    - how much space they take up

    By collecting and analyzing logs, you can understand what transpires within your network. Each log file contains many pieces of information that can be invaluable, especially if you know how to read them and analyze them.

    Useful resources:

    - [How long do you keep log files?](https://serverfault.com/questions/135365/how-long-do-you-keep-log-files)

???+ question "What is an incremental backup?"
    An incremental backup is a type of backup that only copies files that have changed since the previous backup.

    Useful resources:

    - [What Is Incremental Backup?](https://www.nakivo.com/blog/what-is-incremental-backup/)

???+ question "What is RAID? What is RAID0, RAID1, RAID5, RAID6, RAID10?"
    A **RAID** (Redundant Array of Inexpensive Disks) is a technology that is used to increase the performance and/or reliability of data storage.

    - **RAID0**: Also known as disk **striping**, is a technique that breaks up a file and spreads the data across all the disk drives in a RAID group. There are no safeguards against failure
    - **RAID1**: A popular disk subsystem that increases safety by writing the same data on two drives. Called "**mirroring**," RAID 1 does not increase write performance, but read performance may equal up to the sum of each disks' performance. However, if one drive fails, the second drive is used, and the failed drive is manually replaced. After replacement, the RAID controller duplicates the contents of the working drive onto the new one
    - **RAID5**: It is disk subsystem that increases safety by computing parity data and increasing speed by interleaving data across three or more drives (**striping**). Upon failure of a single drive, subsequent reads can be calculated from the distributed parity such that no data is lost
    - **RAID6**: RAID 6 extends RAID 5 by adding another parity block. It requires a minimum of four disks and can continue to execute read and write of any two concurrent disk failures. RAID 6 does not have a performance penalty for read operations, but it does have a performance penalty on write operations because of the overhead associated with parity calculations
    - **RAID10**: Also known as **RAID 1+0**, is a RAID configuration that combines disk mirroring and disk striping to protect data. It requires a minimum of four disks, and stripes data across mirrored pairs. As long as one disk in each mirrored pair is functional, data can be retrieved. If two disks in the same mirrored pair fail, all data will be lost because there is no parity in the striped sets

    Useful resources:

    - [RAID](https://www.prepressure.com/library/technology/raid)

???+ question "How is a user’s default group determined? How would you change it?"
    ```bash
    useradd -m -g initial_group username
    ```

    `-g/--gid`: defines the group name or number of the user's initial login group. If specified, the group name must exist; if a group number is provided, it must refer to an already existing group.

    If not specified, the behaviour of useradd will depend on the `USERGROUPS_ENAB` variable contained in `/etc/login.defs`. The default behaviour (`USERGROUPS_ENAB yes`) is to create a group with the same name as the username, with **GID** equal to **UID**.

    Useful resources:

    - [How can I change a user's default group in Linux?](https://unix.stackexchange.com/questions/26675/how-can-i-change-a-users-default-group-in-linux)

???+ question "What is your best command line text editor for daily working and scripting? ***"
    To be completed.

???+ question "Why would you want to mount servers in a rack?"
    - Protecting Hardware
    - Proper Cooling
    - Organized Workspace
    - Better Power Management
    - Cleaner Environment

    Useful resources:

    - [5 Reasons to Rackmount Your PC](https://www.racksolutions.com/news/custom-projects/5-reasons-to-rackmount-pc/)

???+ question "How to change permissions of the file in linux?"
    The `chmod` command is used to change permissions of files and directories. It supports two modes of operation: symbolic mode and octal mode.

    1. Symbolic Mode:
       - Syntax: `chmod [options] [permissions] file(s)`

       - Examples:
         - Grant read and write permissions to the owner: `chmod u+rw file.txt`
         - Revoke execute permission from the group: `chmod g-x script.sh`
         - Add read and execute permissions to others: `chmod o+rx program`
         - Combined permissions: `chmod u=rw,go=r file.txt`

    2. Octal Mode:
       - Syntax: `chmod [options] [mode] file(s)`

       - Examples:
         - Set read, write, and execute permissions for owner, group, and others: `chmod 755 script.sh`
         - Restrict permissions to the owner only: `chmod 700 private.txt`
         - Grant full permissions to everyone: `chmod 777 public_dir`

???+ question "How to change owner of the file in linux?"
    The `chown` command is used to change the ownership of files and directories.

    - Syntax: `chown [options] owner:group file(s)`

    - Examples:
      - Change the owner and group of a file: `chown john:users file.txt`
      - Recursively change ownership for a directory and its contents: `chown -R alice:staff project_dir`

???+ question "How to change group ownership of the file in linux?"
    The `chgrp` command is used to change the group ownership of files and directories.

    - Syntax: `chgrp [options] group file(s)`

    - Examples:
      - Change the group of a file: `chgrp developers script.sh`
      - Recursively change group ownership for a directory and its contents: `chgrp -R team project_dir`

???+ question "What are the different Linux Directory Structure?"
    The folder structure in Ubuntu Linux follows the Filesystem Hierarchy Standard (FHS), which is a standard for organizing the files and directories on a Unix-like operating system. Here is an overview of the main directories you will typically find in Ubuntu:

    - **/bin**: Contains essential command-line executable files (binaries) that are available to all users.
    - **/boot**: Contains files related to the boot process, including the Linux kernel, initial ramdisk (initrd), and bootloader configuration.
    - **/dev**: Contains device files that represent and allow access to various hardware devices on the system.
    - **/etc**: Contains system-wide configuration files for various applications and services.
    - **/home**: The home directories for individual users. Each user typically has a subdirectory here to store their personal files and settings.
    - **/lib** and **/lib64**: These directories contain shared libraries needed by the system and applications. The "lib64" directory is present on 64-bit systems.
    - **/media**: Mount point for removable media devices such as USB drives or optical discs.
    - **/mnt**: A general-purpose mount point for temporarily mounting filesystems.
    - **/opt**: Contains optional software packages installed on the system. Applications installed here are often self-contained in their own directories.
    - **/proc**: A virtual filesystem that provides information about processes and system status. It is used by many system utilities to obtain runtime information.
    - **/root**: The home directory for the root user, the administrative superuser.
    - **/run**: A temporary filesystem that contains runtime data for various system services. It is cleared on each reboot.
    - **/sbin**: Contains system binaries (executable files) that are primarily used by the root user for system administration tasks.
    - **/srv**: Contains data for services provided by the system.
    - **/sys**: A virtual filesystem that exposes kernel-related information and configuration.
    - **/tmp**: A directory for temporary files created by applications and users. Its contents are typically cleared on each reboot.
    - **/usr**: Contains user-related programs, libraries, documentation, and shared resources. It has subdirectories such as /usr/bin for user binaries, /usr/lib for libraries, and /usr/share for shared data.
    - **/var**: Contains variable data that changes during the system's operation, such as logs, databases, and spool files.
    This is a high-level overview of the Ubuntu Linux folder structure. Each directory serves a specific purpose in organizing the system's files and resources.