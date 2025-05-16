---
title: Ansible
---

# Ansible
	
## Ansible Self Assessment

??? note "Describe each of the following components in Ansible"

    **Task** – a call to a specific Ansible module  
    **Module** – the actual unit of code executed by Ansible on your own host or a remote host. Modules are indexed by category (database, file, network, …) and also referred to as task plugins.  
      
    **Inventory** – An inventory file defines hosts and/or groups of hosts on which Ansible tasks are executed. The inventory file can be in one of many formats, depending on the inventory plugins you have. The most common formats are INI and YAML.  

    **Play** – One or more tasks executed on a given host(s).  

    **Playbook** – One or more plays. Each play can be executed on the same or different hosts.  

    **Role** – Ansible roles allow you to group resources based on certain functionality/service so that they can be easily reused. In a role, you have directories for variables, defaults, files, templates, handlers, tasks, and metadata. You can then use the role by simply specifying it in your playbook.

??? note "How Ansible is different from other automation tools? (e.g. Chef, Puppet, etc.)"

    **Ansible is:**

    * Agentless  
    * Minimal run requirements (Python & SSH) and simple to use  
    * Default mode is "push" (it also supports pull)  
    * Focus on simpleness and ease-of-use

---

??? question "True or False? Ansible follows the mutable infrastructure paradigm"

    **True.**  
    In immutable infrastructure approach, you'll replace infrastructure instead of modifying it.  
    Ansible rather follows the mutable infrastructure paradigm where it allows you to change the configuration of different components, but this approach is not perfect and has its own disadvantages like "configuration drift" where different components may reach different states for different reasons.

---

??? question "True or False? Ansible uses declarative style to describe the expected end state"

    **False.**  
    It uses a **procedural** style.

---

??? note "What kind of automation you wouldn't do with Ansible and why?"

    While it's possible to provision resources with Ansible, some prefer tools that follow the immutable infrastructure paradigm.  
    Ansible doesn't save state by default. So a task that creates 5 instances, when executed again, will create **5 more instances** unless additional checks are implemented or explicit names are provided.  
    Other tools might track state (e.g., via a state file) and only act to bring infrastructure to the defined desired state.

---

??? tip "How do you list all modules and how can you see details on a specific module?"

    1. Use the official Ansible online documentation  
    2. Use the CLI:  
       - `ansible-doc -l` — lists all modules  
       - `ansible-doc [module_name]` — shows details on a specific module

---

### Ansible - Inventory

??? info "What is an inventory file and how do you define one?"

    An inventory file defines hosts and/or groups of hosts on which Ansible tasks are executed.

    **Example inventory file:**

    ```ini
    192.168.1.2
    192.168.1.3
    192.168.1.4

    [web_servers]
    190.40.2.20
    190.40.2.21
    190.40.2.22
    ```

??? info "What is a dynamic inventory file? When would you use one?"

    A dynamic inventory file tracks hosts from one or more sources like cloud providers and CMDB systems.

    You should use one when using external sources and especially when the hosts in your environment are being automatically  
    spun up and shut down, without you tracking every change in these sources.

---

### Ansible - Variables

??? tip "Modify the following task to use a variable instead of the value \"zlib\" and have \"zlib\" as the default in case the variable is not defined"

    ```yaml
    - name: Install a package
      package:
        name: "{{ package_name|default('zlib') }}"
        state: present
    ```

---

??? tip "How to make the variable \"use_var\" optional?"

    With `default(omit)`:

    ```yaml
    - name: Install a package
      package:
        name: "zlib"
        state: present
        use: "{{ use_var|default(omit) }}"
    ```

---

??? question "What would be the result of the following play?"

    ```yaml
    ---
    - name: Print information about my host
      hosts: localhost
      gather_facts: 'no'
      tasks:
          - name: Print hostname
            debug:
                msg: "It's me, {{ ansible_hostname }}"
    ```

    This will **fail**.  
    We're using a fact (`ansible_hostname`), but `gather_facts: no` disables the collection of facts, so the variable is undefined.

---

??? question "When will the value `'2017'` be used in this case: `{{ lookup('env', 'BEST_YEAR') | default('2017', true) }}`?"

    When the environment variable `BEST_YEAR` is **empty or false**, the default value `"2017"` is used.

---

??? tip "If the value of a certain variable is 1, how do you use \"one\" instead of \"two\"?"

    ```jinja
    {{ (certain_variable == 1) | ternary("one", "two") }}
    ```

---

??? tip "The value of a certain variable you use is the string \"True\". You would like the value to be a boolean. How would you cast it?"

    ```jinja
    {{ some_string_var | bool }}
    ```

---

??? question "You want to run an Ansible playbook only on specific minor version of your OS. How would you achieve that?"

    Use a condition on `ansible_distribution_version` in `when`, for example:

    ```yaml
    - name: Only run on minor version 22.04
      debug:
        msg: "Running on Ubuntu 22.04"
      when: ansible_distribution_version == "22.04"
    ```

---

??? info "What is the `become` directive used for in Ansible?"

    The `become` directive is used to **escalate privileges**, typically to run tasks as `root` or another user.  
    It is equivalent to `sudo` in command-line operations.

    ```yaml
    - name: Install package with elevated privileges
      become: true
      package:
        name: "nginx"
        state: present
    ```

---

??? info "What are facts? How to see all the facts of a certain host?"

    **Facts** are system properties collected by Ansible (OS, IPs, memory, etc.).

    To see all facts for a host:

    ```bash
    ansible [host] -m setup
    ```

    You can filter for specific facts with:

    ```bash
    ansible [host] -m setup -a 'filter=ansible_distribution*'
    ```

??? question "What would be the result of running the following task? How to fix it?"

    ```yaml
    - hosts: localhost
      tasks:
          - name: Install zlib
            package:
              name: zlib
              state: present
    ```

    **Fix:** Add `become: yes` if root privileges are required and ensure `gather_facts` is enabled if you use any facts.

---

??? info "Which Ansible best practices are you familiar with? Name at least three"

    - Use **roles** for modular and reusable code
    - Keep **inventory files and group_vars** organized
    - Avoid **shell/command** unless no module fits the use case
    - Use **handlers** for service restarts to prevent redundancy
    - Validate syntax with `ansible-playbook --syntax-check`

---

??? info "Explain the directory layout of an Ansible role"

    A typical Ansible role directory layout:

    ```
    roles/
      └── myrole/
          ├── defaults/
          │   └── main.yml
          ├── files/
          ├── handlers/
          │   └── main.yml
          ├── meta/
          │   └── main.yml
          ├── tasks/
          │   └── main.yml
          ├── templates/
          ├── tests/
          │   └── test.yml
          └── vars/
              └── main.yml
    ```

---

??? question "What are 'blocks' used for in Ansible?"

    **Blocks** group tasks together to apply common error handling, conditional logic, or privilege escalation.

    ```yaml
    tasks:
      - block:
          - name: Do something
            command: /bin/true
        rescue:
          - name: Handle failure
            debug:
              msg: "Something went wrong"
    ```

---

??? tip "How do you handle errors in Ansible?"

    - Use `ignore_errors: yes`
    - Use `block`, `rescue`, and `always`
    - Use conditionals with `when`
    - Use `failed_when` to customize failure conditions

---

??? tip "You would like to run a certain command if a task fails. How would you achieve that?"

    Use `block` + `rescue`:

    ```yaml
    tasks:
      - block:
          - name: This might fail
            command: /bin/false
        rescue:
          - name: Run this if the above fails
            command: echo "Failure caught"
    ```

---

??? example "Playbook to install ‘zlib’ and ‘vim’ on all hosts if the file ‘/tmp/mario’ exists"

    ```yaml
    ---
    - hosts: all
      vars:
          mario_file: /tmp/mario
          package_list:
              - 'zlib'
              - 'vim'
      tasks:
          - name: Check for mario file
            stat:
                path: "{{ mario_file }}"
            register: mario_f

          - name: Install zlib and vim if mario file exists
            become: "yes"
            package:
                name: "{{ item }}"
                state: present
            loop: "{{ package_list }}"
            when: mario_f.stat.exists
    ```

---

??? example "Single task to verify all files in `files_list` exist"

    ```yaml
    - name: Ensure all files exist
      assert:
        that:
          - item.stat.exists
      loop: "{{ files_list }}"
    ```

---

??? example "Playbook to deploy /tmp/system_info file on all hosts except controllers"

    **Playbook:**

    ```yaml
    ---
    - name: Deploy /tmp/system_info file
      hosts: all:!controllers
      tasks:
          - name: Deploy /tmp/system_info
            template:
                src: system_info.j2
                dest: /tmp/system_info
    ```

    **Template (system_info.j2):**

    ```jinja
    # {{ ansible_managed }}
    I'm {{ ansible_hostname }} and my operating system is {{ ansible_distribution }}
    ```

---

??? question "Which variable will be used from these definitions?"

    ```
    * role defaults -> whoami: mario
    * extra vars -> whoami: toad
    * host facts -> whoami: luigi
    * inventory variables -> whoami: browser
    ```

    **Answer:** `toad` (extra vars always take highest precedence).

    Refer to [Variable Precedence Docs](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#ansible-variable-precedence) for the full list.

---

??? quiz "True or False: Evaluate the following statements"

    - A module is a collection of tasks → ❌ False  
    - It’s better to use shell/command instead of specific modules → ❌ False  
    - Host facts override play variables → ✅ True  
    - A role might include: vars, meta, and handlers → ✅ True  
    - Dynamic inventory is generated from external sources → ✅ True  
    - Best practice indentation is 2 spaces instead of 4 → ❌ False (standard is 2 or 4, but Ansible uses 2)  
    - ‘notify’ is used to trigger handlers → ✅ True  
    - `hosts: all:!controllers` means run only on `controllers` → ❌ False (means run on all *except* `controllers`)


??? question "Explain the Difference between Forks, Serial & Throttle"

    - `forks` determines how many hosts Ansible will manage in parallel.
    - `serial` runs a full playbook on a limited number of hosts at a time (e.g. rolling updates).
    - `throttle` limits the number of forks used *for a specific task*.

    ```ini
    [defaults]
    forks = 30
    ```

    ```yaml
    - hosts: webservers
      serial: 1
      tasks:
        - name: ...
    ```

    ```yaml
    tasks:
      - command: /path/to/cpu_intensive_command
        throttle: 1
    ```

---

??? question "What is ansible-pull? How is it different from how ansible-playbook works?"

    - `ansible-playbook` is a **push-based** model (control node pushes configuration).
    - `ansible-pull` is a **pull-based** model. The managed node pulls playbooks from a source like Git and applies them.

    Useful for:
    - Nodes behind firewalls
    - CI/CD style deployments

---

??? question "What is Ansible Vault?"

    Ansible Vault allows you to **encrypt sensitive data** such as passwords, keys, etc.

    Example:

    ```bash
    ansible-vault encrypt secrets.yml
    ansible-vault decrypt secrets.yml
    ansible-vault edit secrets.yml
    ```

---

??? example "Demonstrate Conditionals and Loops"

    **Conditionals:**

    ```yaml
    - name: Install nginx if on Ubuntu
      apt:
        name: nginx
        state: present
      when: ansible_distribution == 'Ubuntu'
    ```

    **Loops:**

    ```yaml
    - name: Create users
      user:
        name: "{{ item }}"
        state: present
      loop:
        - alice
        - bob
    ```

---

??? question "What are filters? Do you have experience with writing filters?"

    Filters are used to **transform data** in Jinja2 templates.

    Examples:
    - `{{ mylist | join(', ') }}`
    - `{{ mystring | upper }}`

    You can also **create custom filters** in Python.

---

??? example "Write a filter to capitalize a string"

    ```python
    def cap(self, string):
        return string.capitalize()
    ```

---

??? question "You would like to run a task only if the previous task changed anything. How would you achieve that?"

    Use `when: previous_task_result.changed`:

    ```yaml
    - name: Create file
      copy:
        src: file.txt
        dest: /tmp/file.txt
      register: result

    - name: Notify on change
      debug:
        msg: "File was changed"
      when: result.changed
    ```

---

??? question "What are callback plugins? What can you achieve by using callback plugins?"

    Callback plugins let you **customize Ansible output** or send results to third-party tools.

    Examples:
    - `json` or `yaml` output
    - Sending results to Slack, Datadog, etc.
    - Custom logging formats

---

??? question "What is Ansible Collections?"

    Collections are **namespaced bundles** of roles, playbooks, plugins, and modules.

    Structure:

    ```
    ansible_collections/
      my_namespace/
        my_collection/
          roles/
          plugins/
          playbooks/
    ```

    Installed via:

    ```bash
    ansible-galaxy collection install my_namespace.my_collection
    ```

---

??? question "Difference between include_tasks and import_tasks?"

    - `import_tasks`: **Static** inclusion. Tasks are parsed when playbook starts.
    - `include_tasks`: **Dynamic** inclusion. Tasks are included at runtime (allows conditionals).

---

??? example "Modify file '/tmp/exercise' in one task"

    File before:

    ```
    Goku = 9001
    Vegeta = 5200
    Trunks = 6000
    Gotenks = 32
    ```

    Desired changes:

    ```
    Goku = 9001
    Vegeta = 250
    Trunks = 40
    Gotenks = 32
    ```

    Ansible task:

    ```yaml
    - name: Change saiyans levels
      lineinfile:
        path: /tmp/exercise
        regexp: "{{ item.regexp }}"
        line: "{{ item.line }}"
      loop:
        - { regexp: '^Vegeta', line: 'Vegeta = 250' }
        - { regexp: '^Trunks', line: 'Trunks = 40' }
    ```

---

### 🔧 Execution and Strategy

??? question "True or False? Ansible runs all tasks in a play on one host before moving to next host"

    ❌ False.  
    Ansible's default **linear strategy** runs each task on all hosts before moving to the next task.

---

??? question "What is a 'strategy' in Ansible? What is the default strategy?"

    A strategy defines **how tasks are executed across hosts**.

    Default: **linear**

    - Linear: run one task at a time on all hosts
    - Free: run all tasks on each host independently
    - Debug: interactively step through tasks

---

??? question "What strategies are you familiar with in Ansible?"

    - **Linear** (default): task-by-task across all hosts
    - **Free**: each host progresses independently
    - **Debug**: step through tasks interactively

---

??? question "What is the `serial` keyword used for?"

    `serial` allows you to do **rolling deployments**.

    Example:

    ```yaml
    - hosts: databases
      serial: 4
    ```

    Runs the full play on 4 hosts at a time.

---

### 🧪 Testing

??? question "How do you test your Ansible based projects?"

    - `ansible-playbook --syntax-check`
    - Use `check mode` (`--check`)
    - Molecule for role testing
    - CI pipelines (GitHub Actions, GitLab CI)

---

??? question "What is Molecule? How does it work?"

    Molecule is a **testing framework** for Ansible roles.

    - Uses Docker or Vagrant
    - Verifies syntax, linting, idempotence
    - Supports testinfra for assertions

---

??? question "You run Ansible tests and get 'idempotence test failed'. What does it mean?"

    It means running the same playbook twice results in **changes on second run**.

    Idempotence is crucial so that tasks don’t make unnecessary changes each time they're run.

---

### 🐞 Debugging

??? question "How to find out the data type of a variable in a playbook?"

    ```jinja
    "{{ some_var | type_debug }}"
    ```

---

??? question "What are Ansible Collections?"

    Collections are **distributable content units** in Ansible.  
    They include:
    - Roles
    - Modules
    - Plugins
    - Playbooks

    You can install them via:

    ```bash
    ansible-galaxy collection install <namespace>.<collection>
    ```

---