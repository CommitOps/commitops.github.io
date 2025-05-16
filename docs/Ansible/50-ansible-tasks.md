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
