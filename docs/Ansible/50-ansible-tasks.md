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
