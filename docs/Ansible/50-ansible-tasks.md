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