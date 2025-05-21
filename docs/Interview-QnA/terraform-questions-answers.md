---
title: Terraform
---

# Terraform Questions and Answers

## <a name="Terraform-101">Terraform 101</a>

??? question "What is Terraform?"
    [Terraform](https://www.terraform.io/intro): "HashiCorp Terraform is an infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share. You can then use a consistent workflow to provision and manage all of your infrastructure throughout its lifecycle. Terraform can manage low-level components like compute, storage, and networking resources, as well as high-level components like DNS entries and SaaS features."

??? question "What are the advantages in using Terraform or IaC in general?"
    - Full automation: In the past, resource creation, modification and removal were handled manually or by using a set of tooling. With Terraform or other IaC technologies, you manage the full lifecycle in an automated fashion.
    - Modular and Reusable: Code that you write for certain purposes can be used and assembled in different ways. You can write code to create resources on a public cloud and it can be shared with other teams who can also use it in their account on the same (or different) cloud.
    - Improved testing: Concepts like CI can be easily applied on IaC based projects and code snippets. This allow you to test and verify operations beforehand.

??? question "What are some of Terraform features?"
    - Declarative: Terraform uses the declarative approach (rather than the procedural one) in order to define end-status of the resources.
    - No agents: as opposed to other technologies (e.g. Puppet) where you use a model of agent and server, with Terraform you use the different APIs (of clouds, services, etc.) to perform the operations.
    - Community: Terraform has strong community who constantly publishes modules and fixes when needed. This ensures there is good modules maintenance and users can get support quite quickly at any point.

??? question "What language does Terraform uses?"
    A DSL called "HCL" (Hashicorp Configuration Language). A declarative language for defining infrastructure.

??? question "What's a typical Terraform workflow?"
    1. Write Terraform definitions: `.tf` files written in HCL that described the desired infrastructure state (and run `terraform init` at the very beginning).
    2. Review: With command such as `terraform plan` you can get a glance at what Terraform will perform with the written definitions.
    3. Apply definitions: With the command `terraform apply` Terraform will apply the given definitions, by adding, modifying or removing the resources.

    This is a manual process. Most of the time this is automated so user submits a PR/MR to propose terraform changes, there is a process to test these changes and once merged they are applied (`terraform apply`).

??? question "What are some use cases for using Terraform?"
    - Infra provisioning and management: You need to automate or code your infra so you are able to test it easily, apply it and make any changes necessary.
    - Multi-cloud environment: You manage infrastructure on different clouds, but looking for a consistent way to do it across the clouds.
    - Consistent environments: You manage environments such as test, production, staging, ... and looking for a way to have them consistent so any modification in one of them, applies to other environments as well.

??? question "What's the difference between Terraform and technologies such as Ansible, Puppet, Chef, etc."
    Terraform is considered to be an IaC technology. It's used for provisioning resources, for managing infrastructure on different platforms.

    Ansible, Puppet and Chef are Configuration Management technologies. They are used once there is an instance running and you would like to apply some configuration on it like installing an application, applying security policy, etc.

    To be clear, CM tools can be used to provision resources so in the end goal of having infrastructure, both Terraform and something like Ansible, can achieve the same result. The difference is in the how. Ansible doesn't save the state of resources, it doesn't know how many instances there are in your environment as opposed to Terraform. At the same time while Terraform can perform configuration management tasks, it has less module support for that specific goal and it doesn't track the task execution state like Ansible.

    The differences are there and it's most of the time recommended to mix the technologies, so Terraform is used for managing infrastructure and CM technologies are used for configuration on top of that infrastructure.

### <a name="Terraform-Hands-On-Basics">Terraform Hands-On Basics</a>

??? question "Q) Explain the following block of Terraform code"
    ```hcl
    resource "aws_instance" "some-instance" {
      ami           = "ami-201720221991yay"
      instance_type = "t2.micro"
    }
    ```

    It's a resource of type `aws_instance` used to provision an instance. The name of the resource (NOT INSTANCE) is `"some-instance"`.

    The instance itself will be provisioned with type `t2.micro` and using an image of the AMI `"ami-201720221991yay"`.

??? question "Q) What do you do next after writing the following in main.tf file?"
    ```hcl
    resource "aws_instance" "some-instance" {
      ami           = "ami-201720221991yay"
      instance_type = "t2.micro"
    }
    ```

    Run `terraform init`. This will scan the code in the directory to figure out which providers are used (in this case the AWS provider) and will download them.

??? question "Q) You've executed `terraform init` and now you would like to move forward to creating the resources but you have concerns and would like to make be 100% sure on what you are going to execute. What should you be doing?"
    Execute `terraform plan`. That will provide detailed information on what Terraform will do once you apply the changes.

??? question "Q) You've downloaded the providers, seen what Terraform will do (with terraform plan) and you are ready to actually apply the changes. What should you do next?"
    Run `terraform apply`. That will apply the changes described in your `.tf` files.

??? question "Q) Explain the meaning of the following strings that are seen at the beginning of each line when you run `terraform apply`"
    - `+` - The resource or attribute is going to be **added**  
    - `-` - The resource or attribute is going to be **removed**  
    - `-/+` - The resource or attribute is going to be **replaced**

??? question "Q) How to cleanup Terraform resources? Why should the user be careful doing so?"
    `terraform destroy` will clean up all the resources tracked by Terraform.

    A user should be careful with this command because **there is no way to revert it**. While you can always re-run `terraform apply`, that can:
    - Take time
    - Generate entirely new resources
    - Break existing dependencies or data

### <a name="Dependencies">Dependencies</a>

??? question "Q) Sometimes you need to reference some resources in the same or separate .tf file. Why and how is it done?"
    **Why**: Because resources are often interconnected.  
    For example, if you create a VPC using the `aws_vpc` resource and want to attach an Internet Gateway (IGW) to it, you'll need to reference the VPC resource from the IGW resource.

    **How**:  
    Use the syntax: `PROVIDER_TYPE.RESOURCE_NAME.ATTRIBUTE`

    Example:

    ```hcl
    resource "aws_vpc" "terraform_test_vpc" {
      cidr_block           = var.vpc_cidr
      enable_dns_hostnames = true
      enable_dns_support   = true

      tags = {
        Name = var.vpc_tag_name
      }
    }

    resource "aws_internet_gateway" "terraform_test_internet_gateway" {
      vpc_id = aws_vpc.terraform_test_vpc.id

      tags = {
        Name = "terraform_test_internet_gateway"
      }
    }
    ```

??? question "Q) Does it matter in which order Terraform creates resources?"
    Yes. When there are **dependencies** between resources, Terraform ensures they are created in the correct order.

    For example, if **resource X** references the **ID of resource Y**, Terraform will create **Y** first.  
    Otherwise, X would fail because it depends on information from a resource that doesn't exist yet.

??? question "Q) Is there a way to print/see the dependencies between the different resources?"
    Yes, you can run:

    ```
    terraform graph
    ```

    This command outputs the resource dependency graph in **DOT format**, which is a graph description language.  
    You can then visualize it using tools like Graphviz to better understand how your resources are connected.


### <a name="Providers">Providers</a>

??? question "Q) Explain what is a 'provider'"
    [terraform.io](https://www.terraform.io/docs/language/providers/index.html):  
    "Terraform relies on plugins called **providers** to interact with cloud providers, SaaS providers, and other APIs...  
    Each provider adds a set of resource types and/or data sources that Terraform can manage.  
    Every resource type is implemented by a provider; without providers, Terraform can't manage any kind of infrastructure."

??? question "Q) Where can you find publicly available providers?"
    In the [Terraform Registry](https://registry.terraform.io/browse/providers)

??? question "Q) What are the names of the providers in this case?"
    ```hcl
    terraform {
        required_providers {
          aws = {
            source  = "hashicorp/aws"
          }
          azurerm = {
            source  = "hashicorp/azurerm"
            version = "~> 3.0.2"
          }
        }
    }
    ```

    **Answer:** `azurerm` and `aws`

??? question "Q) How to install a provider?"
    You write a provider block like this and then run `terraform init`:
    
    ```hcl
    provider "aws" {
      region = "us-west-1"
    }
    ```

??? question "Q) True or False? Applying the following Terraform configuration will fail since no source or version specific for 'aws' provider"
    ```hcl
    terraform {
        required_providers {
          aws = {}
        }
    }
    ```

    **Answer:** False.  
    Terraform will look for the **aws** provider in the public registry and fetch the **latest version**.

??? question "Q) Write a configuration of a Terraform provider (any type you would like)"
    Here's an AWS example with a specific region and provider version:

    ```hcl
    terraform {
      required_providers {
        aws = {
          source  = "hashicorp/aws"
          version = "~> 3.0"
        }
      }
    }

    provider "aws" {
      region = "us-west-2"
    }
    ```

??? question "Q) Where does Terraform install providers from by default?"
    By default, Terraform installs providers from the **Terraform Registry**.

??? question "Q) What is the Terraform Registry?"
    The Terraform Registry provides a centralized location for **official** and **community-managed** providers and modules.

??? question "Q) Where are providers downloaded to (e.g. after running `terraform init`)?"
    They are downloaded to the **`.terraform` directory** in the current working directory.

??? question "Q) Describe at a high level what happens behind the scenes when you run `terraform init` on the following configuration"
    ```hcl
    terraform {
      required_providers {
        aws = {
          source  = "hashicorp/aws"
          version = "~> 3.0"
        }
      }
    }
    ```

    1. Terraform checks if the `aws` provider exists at: `registry.terraform.io/hashicorp/aws`
    2. It downloads and installs the **latest compatible version** of the `aws` provider (in this case, from the 3.x series).
    3. The provider is stored locally in the `.terraform` directory.

??? question "Q) True or False? You can install providers only from hashicorp"
    **False.**  
    You can install providers from **any provider source** or URL, not just from HashiCorp.

### <a name="Variables">Variables</a>

#### Input Variables

??? question "Q) What are input variables good for in Terraform?"
    Input variables allow you to define a piece of data **once** instead of hardcoding it in multiple places. This improves **reusability**, **maintainability**, and **consistency**.

??? question "Q) What types of input variables are supported in Terraform?"
    ```hcl
    string
    number
    bool
    list(<TYPE>)
    set(<TYPE>)
    map(<TYPE>)
    object({<ATTR_NAME> = <TYPE>, ... })
    tuple([<TYPE>, ...])
    ```

??? question "Q) What's the default input variable type in Terraform?"
    The default type is `any`.

??? question "Q) What ways are there to pass values for input variables?"
    - Using `-var` on the CLI
    - Using `-var-file` on the CLI
    - Environment variable: `TF_VAR_<VAR_NAME>`
    - If none are provided, Terraform will prompt the user during execution

??? question "Q) How to reference a variable?"
    Use `var.<VAR_NAME>`

??? question "Q) What is the effect of setting a variable as \"sensitive\"?"
    - The value will be hidden in CLI output such as `terraform plan` and `terraform apply`
    - However, **it will still appear in the state file**

??? question "Q) True or False? If an expression's result depends on a sensitive variable, it will be treated as sensitive as well"
    **True**

??? question "Q) If a variable is defined in multiple places (e.g., tfvars file, env var, -var), which source takes precedence?"
    **Precedence Order**:
    1. Environment variable
    2. `terraform.tfvars` file
    3. CLI `-var` or `-var-file`

??? question "Q) You are prompted for a variable on terraform apply. How can you avoid the prompt?"
    Provide the value in advance using:
    - `-var` option
    - Environment variable (`export TF_VAR_<VAR_NAME>=<VALUE>`)

#### Output Variables

??? question "Q) What are output variables? Why do we need them?"
    Output variables allow you to **display specific values** from your Terraform configuration after execution.  
    Common use cases include:
    - Printing the public IP of a provisioned instance
    - Returning important resource identifiers
    - Passing values between Terraform modules

??? question "Q) Explain the \"sensitive\" parameter of output variable"
    If `sensitive = true` is set on an output variable, Terraform will **suppress its value in CLI output** (e.g., `terraform apply`, `terraform output`).  
    This is useful for hiding secrets like passwords or private keys.

??? question "Q) Explain the \"depends_on\" parameter of output variable"
    `depends_on` is used to explicitly specify **dependencies** for the output variable.  
    This ensures that Terraform **waits for certain resources to be created or modified** before evaluating the output.

#### Locals

??? question "Q) What are locals?"
    Locals in Terraform are similar to variables in that they serve as **placeholders for values**, but unlike input variables, they **cannot be overridden** by users.  
    They are useful for defining **computed values** or **helper expressions** within a configuration.

??? question "Q) What's the use case for using locals?"
    Locals are used when:
    - You have **repeated hardcoded values** and want to centralize them
    - You want to **avoid exposing values** for external override
    - You need **helper logic** or **intermediate values** to simplify expressions in your configuration

#### Variables Hands-On

??? question "Q) Demonstrate input variable definition with type, description and default parameters"
    ```hcl
    variable "app_id" {
      type        = string
      description = "The id of application"
      default     = "some_value"
    }
    ```
    _Note: It's a common practice to define variables in a separate file, such as `vars.tf`._

??? question "Q) How to define an input variable which is an object with attributes 'model' (string), 'color' (string), 'year' (number)?"
    ```hcl
    variable "car_model" {
      description = "Car model object"
      type = object({
        model = string
        color = string
        year  = number
      })
    }
    ```
    _Tip: You can also assign a default value for this object._

??? question "Q) How to reference variables?"
    Variables are referenced using the `var.VARIABLE_NAME` syntax.

    **Example:**

    `vars.tf`
    ```hcl
    variable "memory" {
      type    = string
      default = "8192"
    }

    variable "cpu" {
      type    = string
      default = "4"
    }
    ```

    `main.tf`
    ```hcl
    resource "libvirt_domain" "vm1" {
      name   = "vm1"
      memory = var.memory
      cpu    = var.cpu
    }
    ```

??? question "Q) How to reference variable from inside of string literal? (bonus question: what is that type of expression called?)"
    Use the syntax: `"${var.VAR_NAME}"`.  
    This is called **interpolation**.

    Very common in `user_data` for instances:

    ```hcl
    user_data = <<-EOF
      This is some fabulos string
      It demonstrates how to use interpolation
      Yes, it's truly ${var.awesome_or_meh}
    EOF
    ```

??? question "Q) How can you list all outputs without applying Terraform changes?"
    Run:
    ```bash
    terraform output
    ```
    This will list all the outputs without applying any changes.

??? question "Q) Can you see the output of a specific variable without applying Terraform changes?"
    Yes, use:
    ```bash
    terraform output <OUTPUT_VAR>
    ```
    This is very useful in scripts.

??? question "Q) Demonstrate how to define locals"
    ```hcl
    locals {
      x = 2
      y = "o"
      z = 2.2
    }
    ```

??? question "Q) Demonstrate how to use a local"
    If you defined this:
    ```hcl
    locals {
      x = 2
    }
    ```

    Then you can reference it like this:
    ```hcl
    local.x
    ```

### Data Sources

??? question "Q) Explain data sources in Terraform"
    - Data sources are used to **read** data from providers or external resources (e.g., AWS, GCP, Azure).
    - They do **not** modify or create infrastructure.
    - Many providers expose multiple data sources.

??? question "Q) Demonstrate how to use data sources"
    ```hcl
    data "aws_vpc" "default" {
      default = true
    }
    ```

??? question "Q) How to get data out of a data source?"
    Use the syntax:  
    ```
    data.<PROVIDER_AND_TYPE>.<NAME>.<ATTRIBUTE>
    ```

    For example, given this data source:

    ```hcl
    data "aws_vpc" "default" {
      default = true
    }
    ```

    You can get the VPC ID like this:
    ```hcl
    data.aws_vpc.default.id
    ```

??? question "Q) Is there such a thing as combining data sources? What would be the use case?"
    Yes, you can reference one data source within another.  
    A common use case is **filtering** one data source based on another.

    Example: Get AWS subnets in the default VPC:
    ```hcl
    data "aws_subnets" "default" {
      filter {
        name   = "vpc-id"
        values = [data.aws_vpc.default.id]
      }
    }
    ```

### Lifecycle

??? question "Q) When you update a resource, how it works?"
    By default, Terraform will:
    - Destroy the **current** resource
    - Create a **new** one
    - Update all **references** to point to the new resource

??? question "Q) Is it possible to modify the default lifecycle? How? Why?"
    Yes, the default lifecycle can be customized.

    **Example**: Use `create_before_destroy` to reverse the default behavior:

    ```hcl
    lifecycle {
      create_before_destroy = true
    }
    ```

    **Why**: This is useful when a resource can't be destroyed before a replacement is created.  
    For example, with **AWS Auto Scaling Groups** that rely on immutable **Launch Configurations**.

??? question "Q) You've deployed a virtual machine with Terraform and you would like to pass data to it (or execute some commands). Which concept of Terraform would you use?"
    Use **[Provisioners](https://www.terraform.io/docs/language/resources/provisioners)**.

    Provisioners allow you to:
    - Execute commands
    - Transfer files
    - Configure resources post-creation

### Provisioners

??? question "Q) What are \"Provisioners\"? What they are used for?"
    Provisioners are plugins used with Terraform, usually focusing on configuring services to make them operational.

    Examples of provisioners include:
    - Running configuration management tools like Ansible, Chef, or Puppet on a provisioned instance.
    - Copying files.
    - Executing remote scripts.

??? question "Q) Why is it often recommended to use provisioners as last resort?"
    Provisioners can run a variety of actions that may be difficult to plan and predict, so it's recommended to use Terraform's built-in features whenever possible.

??? question "Q) What is `local-exec` and `remote-exec` in the context of provisioners?"
    - **local-exec** runs commands locally on the machine where Terraform is executed.
    - **remote-exec** runs commands on the remote resource after it is created, typically via SSH or WinRM.

??? question "Q) What is a \"tainted resource\"?"
    A tainted resource is one that was successfully created but failed during provisioning. Terraform marks it as "tainted" and will recreate it on the next apply.

??? question "Q) What does `terraform taint` do?"
    The command `terraform taint resource.id` manually marks a resource as tainted in the state file, forcing Terraform to destroy and recreate it on the next apply.

??? question "Q) What is a data source? In what scenarios would you need to use it?"
    Data sources allow Terraform to look up or compute values to be used elsewhere in configuration.

    Common use cases:
    - Reference resources not managed by Terraform.
    - Reference resources managed by a different Terraform module.
    - Compute complex values with type checking, like `aws_iam_policy_document`.

??? question "Q) What are output variables and what does `terraform output` do?"
    Output variables are named values sourced from module attributes. They are stored in Terraform state and can be accessed by other modules (e.g., via remote state).

    `terraform output` lists these outputs.

??? question "Q) Explain `remote-exec` and `local-exec`"
    - `local-exec`: Executes commands locally on the machine running Terraform.
    - `remote-exec`: Executes commands on remote resources after creation.

??? question "Q) Explain \"Remote State\". When would you use it and how?"
    Terraform stores infrastructure state in a JSON file `terraform.tfstate`.

    **Remote State** stores this file in remote storage (e.g., S3, Azure Blob, GCS) to enable collaboration and shared state among team members.

??? question "Q) Explain \"State Locking\""
    State locking prevents multiple concurrent operations on the same Terraform state file to avoid conflicts.

    When a lock is held by one user, others wait until it is released before applying changes.

??? question "Q) Aside from `.tfvars` files or CLI arguments, how can you inject dependencies from other modules?"
    - Use Terraform's built-in `remote-state` data source to reference outputs from other modules.
    - Community tools like **Terragrunt** are also popular for injecting variables explicitly between modules.

??? question "Q) How do you import an existing resource using `terraform import`?"
    Steps:
    1. Identify the existing resource to import.
    2. Write Terraform configuration matching the resource.
    3. Run `terraform import RESOURCE ID`

    Example:

    Terraform code:

    ```hcl
    resource "aws_instance" "tf_aws_instance" {
      ami           = data.aws_ami.ubuntu.id
      instance_type = "t3.micro"

      tags = {
        Name = "import-me"
      }
    }
    ```

    Command to import:

    ```
    terraform import aws_instance.tf_aws_instance i-12345678
    ```

### State

??? question "Q) What's Terraform State?"
    [terraform.io](https://www.terraform.io/language/state): "Terraform must store state about your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures."

    In other words, it's a mechanism in Terraform to track resources you've created or cleaned up. This is how Terraform knows what to update/create/delete when you run `terraform apply` and other commands like `terraform destroy`.

??? question "Q) Where is Terraform state stored?"
    It depends on usage:
    - For beginners or local usage, the state is stored in the working directory in a file named `terraform.tfstate`.
    - In team or production environments, remote backends (e.g., S3, Azure Blob, GCS) are often used.

??? question "Q) Can you name three different things included in the state file?"
    - Representation of resources (JSON format of resources, attributes, IDs, etc.)
    - Terraform version used
    - Outputs

??? question "Q) Why does it matter where you store the tfstate file? Consider Public vs. Private and Git repo vs. other locations."
    - tfstate may contain sensitive credentials in plaintext, so it should never be stored publicly.
    - tfstate should not be concurrently modified; shared locations with write access risk conflicts (remote state backends handle this).
    - It’s important to store tfstate in secure locations with backups.
    - Therefore, avoid storing tfstate in Git repositories; use secure storage like encrypted buckets.

??? question "Q) True or False? It's common and recommended to edit terraform state files directly by hand."
    False. You should avoid editing Terraform state files manually as much as possible.

??? question "Q) Why might storing the state file locally on your computer be problematic?"
    Locally storing state is fine for solo use but problematic for teams, because:
    - It doesn't allow easy sharing.
    - It does not handle concurrent edits or locking.
    - Collaboration and consistency become difficult.

??? question "Q) Mention some best practices related to tfstate"
    - Don't manually edit the tfstate file.
    - Store it in a secure location since it can contain sensitive data.
    - Backup regularly to enable rollback.
    - Use remote shared storage when working in teams.
    - Enable versioning on the storage backend if supported.

??? question "Q) How and why should concurrent edits of the state file be avoided?"
    Concurrent edits can corrupt the state file, resulting in an invalid representation of resources.

    To prevent this, Terraform applies state locking if the backend supports it (e.g., AWS S3 with DynamoDB). Often this locking is automatic.

??? question "Q) How do you manage state files when you have multiple environments (e.g. development, staging, production)?"
    A common best practice is to maintain a dedicated state file per environment.

??? question "Q) Why is storing the state in a version control repo (e.g., Git) not a good idea?"
    - Sensitive data in plain text (passwords, tokens) may be exposed.
    - Prone to errors due to branch switching, rebasing, or applying non-latest Terraform code versions.


#### Terraform Backend

??? question "Q) What's a Terraform backend? What is the default backend?"
    Terraform backend determines how the Terraform state is stored and loaded. By default, the state is stored locally, but you can configure a remote backend.

??? question "Q) Describe how to set a remote backend of any type you choose"
    Example: Using Amazon S3 as a remote backend.

    1. Create an S3 bucket with Terraform:
       - Add lifecycle rule `prevent_destroy` to avoid accidental deletion.
    2. Enable versioning on the bucket (`aws_s3_bucket_versioning` resource).
    3. Enable server-side encryption (`aws_s3_bucket_server_side_encryption_configuration`).
    4. Block public access to the bucket.
    5. Set up locking mechanism, e.g., a DynamoDB table for state locking.
    6. Run `terraform init` and `terraform apply` carefully to avoid conflicts when creating backend resources.
    7. Add backend configuration in Terraform:

    ```json
    terraform {
      backend "s3" {
        bucket = "your-bucket-name"
        key    = "path/to/terraform.tfstate"
        region = "your-region"
        # other config
      }
    }
    ```

    8. Run `terraform init` again to configure the backend.

??? question "Q) How is the `terraform apply` workflow different when a remote backend is used?"
    It starts with acquiring a state lock to prevent concurrent modifications to the state by others.

??? question "Q) What is the process of switching back from remote backend to local?"
    1. Remove the backend configuration code and run `terraform init` to switch back to the local backend.
    2. Remove the remote backend resources if no longer needed.

??? question "Q) True or False? It's NOT possible to use variables in backend configuration."
    True. Backend configurations do not support variables directly, which can be limiting.

    A workaround: use partial backend configurations in separate `.hcl` files and load them with:

    ```
    terraform init -backend-config=some_backend_partial_conf.hcl
    ```

??? question "Q) Is there a way to obtain information from a remote backend/state using Terraform?"
    Yes, via the data source `terraform_remote_state`.

    Syntax example:

    ```
    data.terraform_remote_state.<NAME>.outputs.<ATTRIBUTE>
    ```

#### Workspaces

??? question "Q) Explain what is a Terraform workspace"
    [developer.hashicorp.com](https://developer.hashicorp.com/terraform/language/state/workspaces):  
    "The persistent data stored in the backend belongs to a workspace. The backend initially has only one workspace containing one Terraform state associated with that configuration. Some backends support multiple named workspaces, allowing multiple states to be associated with a single configuration."

??? question "Q) True or False? Each workspace has its own state file"
    True

??? question "Q) Why might workspaces not be the best solution for managing states for different environments, like staging and production?"
    - All workspaces are stored in one location (one backend), often sharing the same access control and authentication.
    - You usually want different permissions for staging and production environments.
    - Workspaces are prone to human error because you might think you are in one workspace while actually working in another.

#### State Hands-On

??? question "Q) Which command will produce a state file?"
    `terraform apply`

??? question "Q) How to inspect current state?"
    `terraform show`

??? question "Q) How to list resources created with Terraform?"
    `terraform state list`

??? question "Q) How do you rename an existing resource?"
    `terraform state mv`

??? question "Q) How to create a new workspace?"
    `terraform workspace new <WORKSPACE_NAME>`

??? question "Q) How to identify which workspace are you using?"
    `terraform workspace show`

### Terraform Structures and Syntax

#### Lists

??? question "Q) How to define an input variable which is a list of numbers?"
    ```json
    variable "list_of_nums" {
      type = list(number)
      description = "An example of list of numbers"
      default = [2, 0, 1, 7]
    }
    ```

??? question "Q) How to create a number of resources based on the length of a list?"
    ```json
    resource "some_resource" "some_name" {
      count = length(var.some_list)
    }
    ```

??? question "Q) You have a list variable called \"users\". How to access the second item in that list and attribute called \"name\"?"
    `users[1].name`

??? question "Q) You have a list variable called \"users\". How to access attribute \"name\" of all items?"
    `users[*].name`

#### Loops

??? question "Q) What loops are useful for in Terraform?"
    The most common use case is when you need to create multiple resources with only a slight difference (like different name). Instead of defining multiple separate resources, you can define it once and create multiple instances of it using loops.

??? question "Q) Demonstrate how to define a simple Terraform loop"
    ```json
    resource "aws_instance" "server" {
      count = 15
    }
    ```
    The above configuration will create 15 aws instances.

??? question "Q) How to create multiple AWS instances but each with a different name?"
    ```json
    resource "aws_instance" "server" {
      count = 6

      tags = {
        Name = "instance-${count.index}"
      }
    }
    ```
    The above configuration will create 6 instances, each with a different name.

??? question "Q) You have the following variable defined in Terraform\n\n```json\nvariable \"users\" {\n  type    = list(string)\n  default = [\"mario\", \"luigi\", \"peach\"]\n}\n```\nHow to use it to create users on one of the public clouds (or any other platform, infra)?"
    ```json
    resource "aws_iam_user" "user" {
      count = length(var.users)

      name = var.users[count.index]
    }
    ```

??? question "Q) Is there any limitation to \"count\" meta-argument?"
    - `count` isn't supported within an inline block
    - It's quite limited when it comes to lists. Modifying items or removing them may shift indices causing unexpected resource changes or replacements.
    - There are ways to mitigate this, but using count with lists is not always straightforward.

??? question "Q) What's a for_each loop? How is it different from \"count\"?"
    - `for_each` can be applied only on collections like maps or sets (as opposed to `count` which applies to lists).
    - `for_each` helps to address the limitations of `count` in handling list modifications.
    - `for_each` supports usage within inline blocks, unlike `count`.

??? question "Q) Demonstrate how to use the for_each loop"
    ```json
    resource "google_compute_instance" "instances" {
      for_each = var.names_map
      name     = each.value
    }
    ```

??? question "Q) The following resource tries to use for_each loop on a list of string but it fails, why?\n\n```json\nresource \"google_compute_instance\" \"instances\" {\n  for_each = var.names\n  name = each.value\n}\n```"
    `for_each` can be applied only on collections like maps or sets, so the list should be converted to a set like this:  
    `for_each = toset(var.names)`

??? question "Q) How to use for_each loop for inline blocks?"
    ```json
    resource "some_instance" "instance" {
      dynamic "tag" {
        for_each = var.tags

        content {
          key   = tag.key
          value = tag.value
        }
      }
    }
    ```

??? question "Q) There is a list variable called \"users\". You would like to define an output variable with a value of all users in uppercase. How to achieve that?"
    ```json
    output "users" {
      value = [for name in var.user_names : upper(name)]
    }
    ```

??? question "Q) What's the result of the following code?\n\n```json\nresource \"random_integer\" \"num\" {\n  min = 20\n  max = 17\n}\n\nresource \"aws_instance\" \"instances\" {\n  count = random_integer.num.results\n}\n```"
    The above code will fail because it's not possible to reference resource outputs with `count`. Terraform must compute `count` before any resources are created or modified, so referencing resource attributes for `count` causes an error.

??? question "Q) There is a variable called \"values\" with the following value: [\"mario\", \"luigi\", \"peach\"]. How to create an output variable with the string value of the items in the list: \"mario, luigi, peach,\" ?"
    ```json
    output "users" {
      value = "%{ for name in var.values }${name}, %{ endfor }"
    }
    ```

??? question "Q) There is a list variable called \"users\". You would like to define an output variable with a value of all users in uppercase but only if the name is longer than 3 characters. How to achieve that?"
    ```json
    output "users" {
      value = [for name in var.user_names : upper(name) if length(name) > 3]
    }
    ```


#### Maps

??? question "Q) There is a map called \"instances\"\n\n* How to extract only the values of that map?\n* How to extract only the attribute \"name\" from each value?"
    - Using the `values` built-in function: `values(instances)`
    - Extract attribute name from each value: `values(instances)[*].name`

??? question "Q) You have a map variable, called \"users\", with the keys \"name\" and \"age\". Define an output list variable with the following \"my name is {name} and my age is {age}\""
    ```json
    output "name_and_age" {
      value = [for name, age in var.users : "my name is ${name} and my age is ${age}"]
    }
    ```

??? question "Q) You have a map variable, called \"users\", with the keys \"name\" (string) and \"age\" (float). Define an output map variable with the key being name in uppercase and value being age in the closest whole number"
    ```json
    output "name_and_age" {
      value = { for name, age in var.users : upper(name) => floor(age) }
    }
    ```

#### Conditionals

??? question "Q) How to use conditional expressions in Terraform?"
    `some_condition ? "value_if_true" : "value_if_false"`

??? question "Q) Explain the following condition: `var.x ? 1 : 0`"
    If `x` evaluated to true, the result is 1, otherwise (if false) the result is 0.

??? question "Q) Explain the following condition: `var.x != \"\" ? var.x : \"yay\"`"
    If `x` is an empty string the result is `"yay"`, otherwise it's the value of `x` variable.

??? question "Q) Can conditionals be used with meta-arguments?"
    Yes, for example the `count` meta-argument:
    ```json
    resource "aws_instance" "server" {
      count = var.amount ? 1 : 0
      ...
    }
    ```

??? question "Q) Is it possible to combine conditionals and loop?"
    Yes, for example:
    ```json
    dynamic "tag" {
      for_each = {
        for key, value in var.tags:
        key => value
        if key != ""
      }
    }
    ```

#### Misc

??? question "Q) What are meta-arguments in Terraform?"
    Arguments that affect the lifecycle of a resource (its creation, modification, ...) and supported by Terraform regardless of the resource type.

    Some examples:
    * count: how many resources to create out of one definition of a resource
    * lifecycle: how to treat resource creation or removal

??? question "Q) What meta-arguments are you familiar with?"
    * count: how many resources to create out of one definition of a resource
    * lifecycle: how to treat resource creation or removal
    * depends_on: create a dependency between resources

??? question "Q) What does the `templatefile` function do?"
    Renders a template file and returns the result as a string.

??? question "Q) You are trying to use `templatefile` as part of a module and you use a relative path to load a file but sometimes it fails, especially when others try to reuse the module. How can you deal with that?"
    Switch relative paths with what is known as path references. These are fixed paths like module root path, module expression file path, etc.

??? question "Q) How do you test Terraform syntax?"
    A valid answer could be 'I write Terraform configuration and try to execute it' but this makes testing cumbersome and complex.

    There is a `terraform console` command which allows you to easily execute terraform functions and experiment with general syntax.

??? question "Q) True or False? Terraform console should be used carefully as it may modify your resources"
    False. `terraform console` is read-only.

??? question "Q) You need to render a template and get it as a string. Which function would you use?"
    `templatefile` function.

??? question "Q) Explain what `depends_on` is used for and give an example"
    `depends_on` is used to create a dependency between resources in Terraform.

    For example, if you want to deploy an application in a cluster, but the cluster must be ready first (and is managed by Terraform), then you define `depends_on` in the app configuration pointing to the cluster resource to ensure proper ordering.

### Modules

??? question "Q) Explain Modules"
    [Terraform.io](https://www.terraform.io/language/modules/develop): "A module is a container for multiple resources that are used together. Modules can be used to create lightweight abstractions, so that you can describe your infrastructure in terms of its architecture, rather than directly in terms of physical objects."

    Modules are great for creating reusable Terraform code that can be shared and used not only between different repositories but even within the same repo, between different environments (like staging and production).

??? question "Q) What makes a Terraform code module? In other words, what is a module from a practical perspective?"
    Basically any file or files in a directory is a module in Terraform. There is no special syntax to use in order to define a module.

??? question "Q) How do you test a Terraform module?"
    There are multiple answers, but the most common answer would likely be using the tool `terratest`, to test that a module can be initialized, can create resources, and can destroy those resources cleanly.

??? question "Q) When creating a module, do you prefer to use inline blocks, separate resources or both? Why?"
    No right or wrong here.

    Personally, I prefer to use only separate resources in modules as it makes modules more flexible. Inline blocks may limit flexibility at some point.

??? question "Q) True or False? Module source can be only local path"
    False. It can be a Git URL, HTTP URL, etc. For example:

    ```json
    module "some_module" {
      source = "github.com/foo/modules/bar?ref=v0.1"
    }
    ```

??? question "Q) Where can you obtain Terraform modules?"
    Terraform modules can be found at the [Terraform registry](https://registry.terraform.io/browse/modules).

??? question "Q) You noticed there are relative paths in some of your modules and you would like to change that. What can you do and why is that a problem in the first place?"
    Relative paths usually work fine in your own environment as you are familiar with the layout and paths used, but when sharing a module and making it reusable, you may bump into issues as it runs on different environments where the relative paths may no longer be relevant.

    A better approach would be to use `path references` like one of the following:

    * `path.module`: the path of the module where the expression is used
    * `path.cwd`: the path of the current working directory
    * `path.root`: the path of the root module

#### Modules Hands-On

??? question "Q) How to use a module?"
    The general syntax is:

    ```json
    module "<MODULE_NAME>" {
      source = "<MODULE_SOURCE>"

      ...
    }
    ```

    The critical part is the source which you use to tell Terraform where the module can be found.

??? question "Q) Demonstrate using a module called \"amazing_module\" in the path \"../modules/amazing-module\""
    ```json
    module "amazing_module" {
      source = "../modules/amazing-module"
    }
    ```

??? question "Q) What should be done every time you modify the source parameter of a module?"
    `terraform init` should be executed as it takes care of downloading and installing the module from the new path.

??? question "Q) How to access module output variables?"
    The general syntax is:

    ```
    module.<MODULE_NAME>.<OUTPUT_VAR_NAME>
    ```

??? question "Q) You would like to load and render a file from module directory. How to do that?"
    ```hcl
    script = templatefile("${path.module}/user-data.sh", {
      ...
    })
    ```

??? question "Q) There is a module to create a compute instance. How would you use the module to create three separate instances?"
    Starting with Terraform 0.13, the `count` meta-argument can be used with modules. So you could use something like this:

    ```json
    module "instances" {
      source = "/some/module/path"

      count = 3
    }
    ```

    You can also use it in output vars: `value = module.instances[*]`


### Import

??? question "Q) Explain Terraform's import functionality"
    `terraform import` is a CLI command used for importing an existing infrastructure into Terraform's state.

    It does NOT create the definitions/configuration for creating such infrastructure.

??? question "Q) State two use cases where you would use `terraform import`"
    1. You have existing resources in one of the providers and they are not managed by Terraform (i.e., not included in the state)
    2. You lost your tfstate file and need to rebuild it


### Version Control

??? question "Q) You have a Git repository with Terraform files but no .gitignore. What would you add to a .gitignore file in Terraform repository?"

    ```json
    .terraform
    *.tfstate
    *.tfstate.backup
    ```

    You don't want to store state file nor any downloaded providers in .terraform directory. It also doesn't make sense to share/store the state backup files.

### AWS

??? question "Q) What happens if you update user_data in the following case apply the changes?"

    ```json
    resource "aws_instance" "example" {
    ami = "..."
    instance_type = "t2.micro"

    user_data = <<-EOF
                #!/bin/bash
                echo "Hello, World" > index.xhtml
                EOF
    ```
    Nothing, because user_data is executed on boot so if an instance is already running, it won't change anything.
    To make it effective you'll have to use `user_data_replace_on_change = true`.

??? question "Q) You manage ASG with Terraform which means you also have 'aws_launch_configuration' resources. The problem is that launch configurations are immutable and sometimes you need to change them. This creates a problem where Terraform isn't able to delete ASG because they reference old launch configuration. How to do deal with it?"

    Add the following to "aws_launch_configuration" resource

    ```json
    lifecycle {
      create_before_destroy = true
    }
    ```

    This will change the order of how Terraform works. First it will create the new resource (launch configuration). then it will update other resources to reference the new launch configuration and finally, it will remove old resources

??? question "Q) How to manage multiple regions in AWS provider configuration?"

    ```json
    provider "aws" {
      region = "us-west-1"
      alias = "west_region"
    }

    provider "aws" {
      region = "us-east-1"
      alias = "east_region"
    }

    data "aws_region" "west_region" {
      provider = aws.west_region
    }

    data "aws_region" "east_region" {
      provider = aws.east_region
    }


    To use it:

    ```json
    resource "aws_instance" "west_region_instance" {
      provider = aws.west_region
      instance_type = "t2.micro"
      ...
    }
    ```

??? question "Q) Assuming you have multiple regions configured and you would like to use a module in one of them. How to achieve that?"

    ```json
    module "some_module" {
      source = "..."

      providers = {
        aws = aws.some_region
      }

      ...
    }
    ```

??? question "Q) How to manage multiple AWS accounts?"

    One way is to define multiple different provider blocks, each with its own "assume_role"

    ```json
    provider "aws" {
      region = "us-west-1"
      alias = "some-region"

      assume_role {
        role_arn = "arn:aws:iam::<SOME_ACCOUNT_ID>:role/<SOME_ROLE_NAME>"
      }
    }
    ```

### Validations

### Secrets

??? question "Q) What's the issue with the following provider configuration?"
    ```json
    provider "aws" {
      region = "us-west-1"

      access_key = "blipblopblap"
      secret_key = "bipbopbipbop"
    }
    ```

    It's not secure! you should never store credentials in plain text this way.

??? question "Q) What can you do to NOT store provider credentials in Terraform configuration files in plain text?"

    1. Use environment variables
    2. Use password CLIs (like 1Password which is generic but there also specific provider options like aws-vault)

??? question "Q) How can you manage secrets/credentials in CI/CD?"

    That very much depends on the CI/CD system/platform you are using.

    - GitHub Actions: Use Open ID Connect (OIDC) to establish connection with your provider. You then can specify in your GitHub Actions workflow the following:

    ```json
    - uses: aws-actions/configure-aws-credentials@v1
    with:
    role-to-assume: arn:aws:iam::someIamRole
    aws-region: ...
    ```

    - Jenkins: If Jenkins runs on the provider, you can use the provider access entities (like roles, policies, ...) to grant the instance, on which Jenkins is running, access control
    - CircleCI: you can use `CircleCI Context` and then specify it in your CircleCI config file

    ```json
    context:
    - some-context
    ```

??? question "Q) What are the pros and cons of using environment variables for managing secrets in Terraform configurations?"

    Pros:
    * You avoid using secrets directly in configurations in plain text
    * free (no need to pay for secret management platforms/solutions)
    * Straightforward to use

    Cons:
      * Configurations might not be usable without the environment variables which may make impact the user experience as the user has to know what environment variables he should pass for everything to work properly
      * Mostly managed outside of Terraform mechanisms which makes it hard to enforce, track, ... anything that is related to secrets when it depends on the user to pass environment variables

??? question "Q) True or False? If you pass secrets with environment variables, they are not visible in your state file"

    False. State files include sensitive data as it is. Which means it's very important that wherever you store your state file, it's encrypted and accessible only to those who should be able to access it.

??? question "Q) True or False? If you pass secrets from a centralized secrets store (like Hashicorp Vault) they are not visible in plan files (terraform plan)"

    False. It doesn't matter where your secrets store (file, environment variables, centralized secrets store), they will be visible in both state file and plan output.