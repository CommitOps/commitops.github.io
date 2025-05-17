---
title: AWS
---

# **AWS Questions & Answers**

## AWS Interview QnA

??? question "1. List the components required to build Amazon VPC?"
    - **Ans:** Subnet, Internet Gateway, NAT Gateway, HW VPN Connection, Virtual Private Gateway, Customer Gateway, Router, Peering Connection, VPC Endpoint for S3, Egress-only Internet Gateway.

??? question "2. How do you safeguard your EC2 instances running in a VPC?"
    - **Ans:** Security Groups can be used to protect your EC2 instances in a VPC. We can configure both INBOUND and OUTBOUND traffic in a Security Group which enables secured access to your EC2 instances. Security Group automatically denies any unauthorized access to your EC2 instances.

??? question "3. In a VPC how many EC2 instances can you use?"
    - **Ans:** Initially you are limited to launch 20 EC2 Instances at one time. Maximum VPC size is 65,536 instances.

??? question "4. Can you establish a peering connection to a VPC in a different REGION?"
    - **Ans:** Not possible. Peering Connection are available only between VPC in the same region.

??? question "5. Can you connect your VPC with a VPC owned by another AWS account?"
    - **Ans:** Yes, Possible. Provided the owner of other VPCs accepts your connection.

??? question "6. What are all the different connectivity options available for your VPC?"
    - **Ans:** Internet Gateway, Virtual Private Gateway, NAT, EndPoints, Peering Connections.

??? question "7. Can an EC2 instance inside your VPC connect with the EC2 instance belonging to other VPCs?"
    - **Ans:** Yes, Possible. Provided an Internet Gateway is configured in such a way that traffic bounded for EC2 instances running in other VPCs.

??? question "8. How can you monitor network traffic in your VPC?"
    - **Ans:** It is possible using Amazon VPC Flow-Logs feature.

??? question "9. Difference between Security Groups and ACLs in a VPC?"
    - **Ans:** A Security Group defines which traffic is allowed TO or FROM EC2 instance. Whereas ACL, controls at the SUBNET level, scrutinize the traffic TO or FROM a Subnet.

??? question "10. How an EC2 instance in a VPC establish the connection with the internet?"
    - **Ans:** Using either a Public IP or an Elastic IP.

??? question "11. Different types of Cloud Computing as per services?"
    - **Ans:** PAAS (Platform As A Service), IAAS (Infrastructure As A Service), SAAS (Software As A Service)

??? question "12. What is Auto Scaling?"
    - **Ans:** Creating duplicate instances during heavy business hours. Scale-IN and Scale-OUT are two different statuses of Scaling. Scale-IN: Reducing the instances. Scale-OUT: Increasing the instances by duplicating.

??? question "13. What is AMI?"
    - **Ans:** AMI is defined as Amazon Machine Image. Basically it’s a template comprising software configuration part. For example, Operating System, DB Server, Application Server, etc.

??? question "14. Difference between Stopping and Terminating the Instances?"
    - **Ans:** When you STOP an instance it is a normal shutdown. The corresponding EBS volume attached to that instance remains attached and you can restart the instance later. When you TERMINATE an instance it gets deleted and you cannot restart that instance again later. And any EBS volume attached with that instance also deleted.

??? question "15. When you launch a standby Relational Database Service instance will it be available in the same Available Zone?"
    - **Ans:** Not advisable. Because the purpose of having standby RDS instance is to avoid an infrastructure failure. So you have to keep your standby RDS service in a different Availability Zone, which may have different infrastructure.

??? question "16. Difference between Amazon RDS, DynamoDB and Redshift?"
    - **Ans:** RDS is meant for structured data only. DynamoDB is meant for unstructured data which is a NoSQL service. Redshift is a data warehouse product used for data analysis.

??? question "17. What are Lifecycle Hooks?"
    - **Ans:** Lifecycle Hooks are used in Auto Scaling. Lifecycle hooks enable you to perform custom actions by pausing instances as an Auto Scaling group launches or terminates them. Each Auto Scaling group can have multiple lifecycle hooks.

??? question "18. What is S3?"
    - **Ans:** S3 stands for Simple Storage Service, with a simple web service interface to store and retrieve any amount of data from anywhere on the web.

??? question "19. What is AWS Lambda?"
    - **Ans:** Lambda is an event-driven platform. It is a compute service that runs code in response to events and automatically manages the compute resources required by that code.

??? question "20. In S3 how many buckets can be created?"
    - **Ans:** By default 100 buckets can be created in a region.

??? question "21. What is CloudFront?"
    - **Ans:** Amazon CloudFront is a service that speeds up transfer of your static and dynamic web content such as HTML files, IMAGE files, etc. CloudFront delivers your particulars thru worldwide data centers named Edge Locations.

??? question "22. Brief about S3 service in AWS?"
    - **Ans:** S3, a Simple Storage Service from Amazon. You can move your files TO and FROM S3. Its like a FTP storage. You can keep your SNAPSHOTS in S3. You can also ENCRYPT your sensitive data in S3.

??? question "23. Explain Regions and Available Zones in EC2?"
    - **Ans:** Amazon has hosted EC2 in various locations around the world. These locations are called REGIONS. For example in Asia, Mumbai is one region and Singapore is another region. Each region is composed of isolated locations which are known as AVAILABLE ZONES. Region is independent. But the Available Zones are linked thru low-latency links.

??? question "24. What are the two types of Load Balancer?"
    - **Ans:** Classic LB and Application LB. ALB is the Content Based Routing.

??? question "25. Can an AMI be shared?"
    - **Ans:** Yes. A developer can create an AMI and share it with other developers for their use. A shared AMI is packed with the components you need and you can customize the same as per your needs. As you are not an owner of a shared AMI there is a risk always involved.

??? question "26. What is a Hypervisor?"
    - **Ans:** A Hypervisor is a kind of software that enables Virtualization. It combines physical hardware resources into a platform which is delivered virtually to one or more users. XEN is the Hypervisor for EC2.

??? question "27. Key Pair and its uses?"
    - **Ans:** You use Key Pair to login to your Instance in a secured way. You can create a key pair using EC2 console. When your instances are spread across regions you need to create key pair in each region.

??? question "28. What is the feature of ClassicLink?"
    - **Ans:** ClassicLink allows instances in EC2 classic platform to communicate with instances in VPC using Private IP address. EC2 classic platform instances cannot be linked to more than one VPC at a time.

??? question "29. Can you edit a Route Table in VPC?"
    - **Ans:** Yes. You can always modify route rules to specify which subnets are routed to the Internet gateway, the virtual private gateway, or other instances.

??? question "30. How many Elastic IPs can you create?"
    - **Ans:** 5 VPC Elastic IP addresses per AWS account per region

??? question "31. Can you ping the router or default gateway that connects your subnets?"
    - **Ans:** NO, you cannot. It is not supported. However you can ping EC2 instances within a VPC, provided your firewall, Security Groups and network ACLs allows such traffic.

??? question "32. How will you monitor the network traffic in a VPC?"
    - **Ans:** Using Amazon VPC Flow Logs feature.

??? question "33. Can you make a VPC available in multiple Available Zones?"
    - **Ans:** Yes.

??? question "34. How do you ensure an EC2 instance is launched in a particular Available Zone?"
    - **Ans:** After selecting your AMI Template and Instance Type, in the third step while configuring the instance you must select the SUBNET in which you wish to launch your instance. It will be launched in the AZ associated with that SUBNET.

??? question "35. For Internet Gateways do you find any Bandwidth constraints?"
    - **Ans:** NO. Normally an IG is HORIZONTALLY SCALED, Redundant and Highly Available. It is not having any Bandwidth constraints usually.

??? question "36. What is the significance of a Default VPC?"
    - **Ans:** When you launch your instances in a Default VPC in a Region, you would be getting the benefit of advanced Network Functionalities. You can also make use of Security Groups, multiple IP addresses, and multiple Network interfaces.

??? question "37. Can you make use of default EBS Snapshots?"
    - **Ans:** You can use, provided if it is located in the same region where your VPC is presented.

??? question "38. What will happen when you delete a PEERING CONNECTION in your side?"
    - **Ans:** The PEERING CONNECTION available in the other side would also get terminated. There will no more traffic flow.

??? question "39. Can you establish a Peering connection to a VPC in a different region?"
    - **Ans:** NO. It’s possible between VPCs in the same region.

??? question "40. Can you connect your VPC with a VPC created by another AWS account?"
    - **Ans:** Yes. Only when that owner accepts your peering connection request.

??? question "41. When you delete your DB instance what will happen to your backups and DB snapshots?"
    - **Ans:** When a DB instance is deleted, RDS retains the user-created DB snapshot along with all other manually created DB snapshots. Also automated backups are deleted and only manually created DB Snapshots are retained.

??? question "42. What is the significance of an Elastic IP?"
    - **Ans:** The Public IP is associated with the instance until it is stopped or terminated Only. A Public IP is not static. Every time your instance is stopped or terminated the associated Public IP gets vanished and a new Public IP gets assigned with that instance. To overcome this issue a public IP can be replaced by an Elastic IP address, which stays with the instance as long as the user doesn’t manually detach it. Similarly when if you are hosting multiple websites on your EC2 server, in that case you may require more than one Elastic IP address.

??? question "43. How will you use S3 with your EC2 instances?"
    - **Ans:** Websites hosted on your EC2 instances can load their static contents directly from S3. It provides highly scalable, reliable, fast, inexpensive data storage infrastructure.

??? question "44. Is this possible to connect your company datacenter to Amazon Cloud?"
    - **Ans:** Yes, you can very well do this by establishing a VPN connection between your company’s network and Amazon VPC.

??? question "45. Can you change the Private IP of an EC2 instance while it is running or stopped?"
    - **Ans:** A Private IP is STATIC. And it is attached with an instance throughout its lifetime and cannot be changed.

??? question "46. What is the use of Subnets?"
    - **Ans:** When a network has more number of HOSTS, managing these hosts can be tedious under a single large network. Therefore we divide this large network into easily manageable sub-networks (subnets) so that managing hosts under each subnet becomes easier.

??? question "47. What is the use of Route Table?"
    - **Ans:** Route Table is used to route the network packets. Generally one route table would be available in each subnet. Route table can have any number of records or information, hence attaching multiple subnets to a route table is also possible.

??? question "48. Can you use the Standby DB instance for read and write along with your Primary DB instance?"
    - **Ans:** Standby server cannot be used in parallel with primary server unless your Primary instance goes down.

??? question "49. What is the use of Connection Draining?"
    - **Ans:** Connection Draining is a service under Elastic Load Balancing. It keeps monitoring the healthiness of the instances. If any instance fails, Connection Draining pulls all the traffic from that particular failed instance and re-routes the traffic to other healthy instances.

??? question "50. What is the role of AWS CloudTrail?"
    - **Ans:** CloudTrail is designed for logging and tracking API calls. Also used to audit all S3 bucket accesses.

??? question "51. What is the use of Amazon Transfer Acceleration Service?"
    - **Ans:** ATA service speeds up your data transfer with the use of optimized network paths. Also, speed up your CDN up to 300% compared to normal data transfer speed.

??? question "52. How do you design a highly available architecture on AWS for a web application?"
    - **Ans:** I would deploy the application across multiple Availability Zones behind a load balancer to distribute traffic. I’d use an Auto Scaling Group so instances can recover from failures and scale with demand, and ensure the database is Multi-AZ or replicated for redundancy. For maximum availability, I might also implement a multi-region failover with DNS if required.

??? question "53. What are RTO and RPO, and how do they influence your AWS disaster recovery strategy?"
    - **Ans:** RTO (Recovery Time Objective) is the target maximum downtime, and RPO (Recovery Point Objective) is the target maximum data loss in time. These drive the DR strategy: a low RTO/RPO means we need faster recovery solutions (like active-active multi-region or real-time replication), whereas a higher RTO/RPO allows for simpler solutions like restoring from backups with more downtime.

??? question "54. If an AWS region hosting your application goes down, what steps would you take to recover?"
    - **Ans:** I would fail over to a secondary region that has been prepared for DR. For example, if I have set up cross-region replication or backups, I’d launch the infrastructure in the DR region (using automated templates/IaC), restore data from the latest backup or replica, and update DNS (Route 53) to point users to the application in the new region. The key is having a pre-planned DR environment and automated processes to bring services back quickly.

??? question "55. You notice a sudden 30% increase in AWS costs this month. How do you investigate and address it?"
    - **Ans:** First, I’d use AWS Cost Explorer or billing reports to identify which services or resources saw the cost spike. Once I pinpoint the cause (for example, an oversized instance left running or a sudden increase in data transfer), I’d take action to correct it – such as shutting down or right-sizing the resource, or fixing the usage issue. I would also set up cost alerts or budgets to catch future anomalies early.

??? question "56. Explain the difference between vertical and horizontal scaling in AWS, and when you might use each."
    - **Ans:** Vertical scaling means increasing the resources of a single server (for example, upgrading to a larger EC2 instance), while horizontal scaling means adding more instances/servers to distribute the load. I’d use horizontal scaling for most web applications because it improves fault tolerance and scalability (adding more instances behind a load balancer). Vertical scaling is sometimes used for quick performance boosts or when an application can’t be distributed, but it has limits and a single point of failure.

??? question "57. How do you monitor a production environment in AWS? Name some key services or metrics you focus on."
    - **Ans:** I rely on Amazon CloudWatch for monitoring. I track metrics like CPU utilization, memory (using the CloudWatch agent), disk I/O, network traffic, and custom application metrics (like latency or error rates). I set up CloudWatch Alarms on critical metrics to get alerts, use CloudWatch Logs (or a centralized logging solution) to monitor application logs, and may use AWS X-Ray or other APM tools to trace and diagnose performance issues.

??? question "58. Your application’s response times have increased significantly. What AWS tools or approaches would you use to identify the bottleneck?"
    - **Ans:** I would start by checking CloudWatch metrics to see if any resource (CPU, memory, database throughput, etc.) is under pressure or if latency spiked on a specific component. Then I’d use AWS X-Ray (or another tracing/APM tool) to trace requests through the application and identify which service or call is slow. Examining CloudWatch Logs or enabling detailed logs on services (like ALB access logs or RDS performance insights) can also help pinpoint the issue.

??? question "59. An EC2 instance in a private subnet cannot reach the internet. What could be the problem and how do you fix it?"
    - **Ans:** The likely issue is that the instance has no route to the internet – typically missing a NAT Gateway (or NAT instance) setup. In a private subnet, instances need a NAT in a public subnet and a route in their route table pointing to that NAT for outbound internet access. I would deploy a NAT Gateway in a public subnet (with an Internet Gateway on the VPC) and update the private subnet’s route table to send outbound traffic through the NAT.

??? question "60. A developer accidentally left an S3 bucket open to the public. How do you remediate this and prevent it from happening again?"
    - **Ans:** I would immediately remove public access by adjusting the bucket policy/ACL and enabling S3 Block Public Access on that bucket (and at the account level if appropriate). Then, to prevent recurrence, I’d implement guardrails: for example, use AWS Config rules or IAM SCPs to detect or disallow public buckets, and ensure all buckets have proper access policies and default encryption. I’d also review access logs to verify no sensitive data was accessed while it was public.

??? question "61. What is the principle of least privilege, and how do you apply it in AWS IAM?"
    - **Ans:** The principle of least privilege means giving users and services only the minimum permissions they need to perform their tasks and nothing more. In AWS IAM, I implement this by creating finely-scoped policies (specifying exact allowed actions on specific resources), using IAM roles for services with only the necessary permissions, and regularly reviewing and removing any excessive or unused privileges.

??? question "62. How do you ensure compliance and audit readiness for your AWS infrastructure?"
    - **Ans:** I enable AWS CloudTrail to log all API actions for audit tracking and use AWS Config to continuously evaluate resource configurations against our compliance rules. We enforce best practices like encryption at rest/in transit and IAM least privilege. I also might use AWS Security Hub or third-party audit tools to run compliance checks (for standards like CIS, PCI, etc.) and produce reports. Regular audits and automated alerts for any violations (for example, an unencrypted volume or open security group) help ensure we stay compliant.

??? question "63. How do you manage Terraform state in a team environment using AWS?"
    - **Ans:** We store Terraform state in a remote backend (for example, an S3 bucket with DynamoDB table for state locking in AWS). This allows team members to share state and avoids conflicts – only one person can modify state at a time thanks to the lock. The remote state is secured and versioned, and we manage access to it via IAM, ensuring state files are not stored locally or lost.

??? question "64. What would you do if a Terraform apply failed due to a state lock or a conflict?"
    - **Ans:** If it’s a state lock issue (for instance, the state file is locked from a previous run), I’d clear the lock – for AWS backend that might mean using DynamoDB to remove a stale lock or running terraform force-unlock after confirming no other process is running. If it’s a conflict because something was changed outside of Terraform, I’d import the resource or run a terraform refresh to reconcile state, update the configuration to match the real environment, and then re-run the apply.

??? question "65. You ran an AWS CloudFormation update and it failed. How do you troubleshoot and roll back the changes?"
    - **Ans:** I’d go to the CloudFormation console and check the stack events to see which resource failed and what the error was. From there, I’d fix the underlying issue – for example, correct a parameter or resolve a dependency – and then attempt the update again. CloudFormation will automatically attempt to roll back on failure, but if it gets stuck, I might need to manually intervene (possibly update the stack with a known good configuration or delete/recreate the stack if the failure left it in an unrecoverable state).

??? question "66. Describe a CI/CD pipeline you have set up for deploying infrastructure or applications to AWS."
    - **Ans:** In one case, I set up a pipeline using Jenkins (and also used AWS CodePipeline in another project). The flow was: a commit in Git triggers the pipeline, which then runs automated tests and builds an artifact or Docker image. If tests pass, the pipeline runs our Infrastructure as Code (Terraform/CloudFormation) to provision/update AWS resources, and then deploys the application (for example, updates the ECS service or pushes the new code to EC2/Beanstalk). We also included approval steps and automated rollbacks on failure to make deployments safe.

??? question "67. How do you minimize downtime during deployments of a cloud-native application?"
    - **Ans:** I use deployment strategies that allow zero-downtime releases, like blue-green or rolling deployments. For example, with blue-green, I deploy the new version to a parallel environment (new set of servers or containers) and then switch over traffic via load balancer or DNS once it’s verified. With rolling deployments (or canary releases), I gradually replace or update instances/pods with the new version so that a portion of traffic is always served by an up-to-date instance and the application never fully goes down during the release.

??? question "68. You need to deploy a containerized application on AWS. What services would you use and what are the steps?"
    - **Ans:** I would use Amazon ECR to store the Docker images and then deploy using a container orchestration service like Amazon ECS or EKS. The steps include: building the Docker image and pushing it to ECR, then creating a task definition (if using ECS) or a Kubernetes deployment (if using EKS) for the application. Next, I’d set up a service (ECS service or Kubernetes service) to run the containers, often behind an Application Load Balancer for traffic. Finally, I’d configure auto-scaling for the tasks/pods and use IaC/pipeline to automate this deployment process.

??? question "69. If you receive an alert that CPU utilization is high on a critical server, what actions would you take?"
    - **Ans:** I would first log in to AWS or our monitoring dashboard to confirm the high CPU and check what's causing it (looking at CloudWatch metrics and possibly the instance logs or processes). If it’s due to legitimate load, I might scale out by adding instances or scale up the instance size temporarily, and then investigate optimizing the workload. If it looks like an abnormal spike (for example, a stuck process or a memory leak leading to swap usage), I’d remediate by restarting or fixing that service, and ensure auto-scaling or proper limits are in place to handle future spikes.

??? question "70. What are the key differences between Terraform and CloudFormation?"
    - **Ans:** Terraform is an open-source Infrastructure as Code tool that works across multiple cloud providers and uses its own state file to track resources, whereas CloudFormation is AWS’s native IaC service that manages AWS resources without an external state file (state is managed by AWS within the stack). Terraform uses HCL for configuration and can provision resources in different clouds or services in one workflow, while CloudFormation uses JSON/YAML templates and is limited to AWS (with deep integration, offering features like change sets, stack policies, and drift detection). In practice, Terraform offers more flexibility for hybrid/multi-cloud environments, and CloudFormation is convenient for AWS-only setups with out-of-the-box integration.

??? question "71. If you suspect a security breach in your AWS environment, what steps would you take to respond?"
    - **Ans:** First, I would contain the incident by isolating affected resources – for example, take compromised EC2 instances offline (stop or quarantine them) and disable any exposed credentials. Next, I’d investigate using CloudTrail logs, CloudWatch logs, and other monitoring data to determine the scope and root cause of the breach. I would rotate any compromised keys or passwords, patch vulnerabilities or misconfigurations that were exploited, and restore clean backups if necessary. Throughout the process, I’d follow our incident response plan, which includes communicating with the security team and stakeholders and later conducting a post-mortem to prevent similar incidents in the future.

## **AWS MCQs QnA**

???+ question "1. Q: You cannot store unlimited data in Amazon Web Services….."
    1. True  
    2. False

    **Ans:** False

???+ question "2. Q: Rapid provisioning allows you to very quickly spin up a new virtual machine with minimal effort. True or false?"
    1. True  
    2. False

    **Ans:** True

???+ question "3. Q: A hybrid setup is one in which part of your resources are AWS and the rest are with another cloud provider. True or False?"
    1. True  
    2. False

    **Ans:** False

???+ question "4. Q: As an added layer of security for AWS management, which of the following should you do?"
    1. Create multiple Admin accounts  
    2. Generate a new security key each time you log in  
    3. Create IAM users

    **Ans:** Create IAM users

???+ question "5. Q: Is AMI template?"
    1. True  
    2. False

    **Ans:** True

???+ question "6. Q: EC2 Instances are Virtual Server in AWS"
    1. True  
    2. False

    **Ans:** True

???+ question "7. Q: What does 'elastic' refer to in Elastic Compute Cloud(EC2)? Select all that apply."
    1. Increasing and decreasing capacity as needed  
    2. Monitoring services on multiple devices  
    3. Operating on Mac, Windows and Linux  
    4. Paying only for running virtual machines  
    5. Stretching applications across virtual machines

    **Ans:** 1. Increasing and decreasing capacity as needed & 4. Paying only for running virtual machines

???+ question "8. Q: You can upload a custom configuration virtual image and sell it on the AWS Marketplace. True or false?"
    1. True  
    2. False

    **Ans:** True

???+ question "9. Q: EC2 Machine types define which of the following?"
    1. AWS Region  
    2. Core Count  
    3. User Location

    **Ans:** Core Count

???+ question "10. Q: Which is default instance type?"
    1. On-demand  
    2. RI  
    3. Spot instance

    **Ans:** On-demand

???+ question "11. Q: What is Elastic Computing?"
    1. Data will be replicate to different AZs  
    2. You can spin up and spin down VMs  
    3. Automatically VMs will be add and remove

    **Ans:** You can spin up and spin down VMs

???+ question "12. Q: Can We launch multiple instances with same AMI?"
    1. True  
    2. False

    **Ans:** True

???+ question "13. Q: PEM file is one time physical password…"
    1. True  
    2. False

    **Ans:** True

???+ question "14. Q: Windows user required PPK file to connect Linux instance hosted on AWS."
    1. True  
    2. False

    **Ans:** True

???+ question "15. Q: You can purchase time on EC2 directly from other users and specify the price you want to pay. True or false?"
    1. True  
    2. False

    **Ans:** True

???+ question "16. Q: Which of the following might prevent your EC2 instance from appearing in the list of instances?"
    1. EC2 is not selected  
    2. Correct region is not selected  
    3. AWS marketplace is not selected

    **Ans:** Correct region is not selected

???+ question "17. Q: Which of the following main reason to terminate an unused EC2 instance?"
    1. Security Concerns  
    2. Additional fees  
    3. Data Loss

    **Ans:** Additional fees

???+ question "18. Q: Which AWS service exists only to redundantly cache data and images?"
    1. AWS Availability Zones  
    2. AWS Edge Locations  
    3. AWS Regions

    **Ans:** AWS Edge Locations

???+ question "19. Q: Regions, AZs and Edge Locations all terms are same…"
    1. True  
    2. False

    **Ans:** False

???+ question "20. Q: AWS every service is available at every regions…."
    1. True  
    2. False

    **Ans:** False

???+ question "1. Q: Premium support is Available in AWS for Developer, Business & Enterprise level?"
    1. True  
    2. False  

    **Ans:** True

???+ question "2. Q: Can you add new Debit/Credit card in your AWS Account?"
    1. True  
    2. False  

    **Ans:** True

???+ question "3. Q: Can you increase micro to large of instance?"
    1. True  
    2. False  

    **Ans:** True

???+ question "4. Q: On-demand instances is based on a bid mechanism."
    1. True  
    2. False  

    **Ans:** False

???+ question "5. Q: RI can be sold on the AWS marketplace?"
    1. True  
    2. False  

    **Ans:** True

???+ question "6. Q: Which is default types options in AWS?"
    1. On-demand  
    2. RI  
    3. Spot instance  

    **Ans:** On-demand

???+ question "7. Q: What are On-demand, RI and Spot instances? Which instance is best on Production?"
    1. On-demand  
    2. RI  
    3. Depends on Application or Website  

    **Ans:** Depends on Application or Website

???+ question "8. Q: Which is most expensive options in instance?"
    1. On-demand  
    2. RI  
    3. Spot instance  

    **Ans:** On-demand

???+ question "9. Q: Amazon S3 is internet accessible storage via HTTP /HTTPS"
    1. True  
    2. False  

    **Ans:** True

???+ question "10. Q: Amazon S3 is not a object level of storage"
    1. True  
    2. False  

    **Ans:** False

???+ question "11. Q: Amazon S3 is storage for the Internet"
    1. True  
    2. False  

    **Ans:** True

???+ question "12. Q: Temporary storage access speed is not guaranteed."
    1. True  
    2. False  

    **Ans:** True

???+ question "13. Q: There is 99.99% SLA(Service Level Agreement) for temporary storage."
    1. True  
    2. False  

    **Ans:** False

???+ question "14. Q: Ephemeral storage is block-level storage?"
    1. True  
    2. False  

    **Ans:** True

???+ question "15. Q: Single object size is up to 5 TB in Amazon S3."
    1. True  
    2. False  

    **Ans:** True

???+ question "16. Q: You can create unlimited bucket size in Amazon S3."
    1. True  
    2. False  

    **Ans:** True

???+ question "17. Q: By default, Instance-Backed and EBS-Backed root volumes delete all data. However, when using EBS-Backed storage, you can configure it to save the data on the root volume. True or false?"
    1. True  
    2. False  

    **Ans:** True

???+ question "18. Q: You can switch from an Instance-Backed to an EBS-Backed root volume at any time. True or False?"
    1. True  
    2. False  

    **Ans:** False

???+ question "19. Q: When using an EBS-Backed machine, you can override the terminate option and save the root volume. True or False?"
    1. True  
    2. False  

    **Ans:** True

???+ question "20. Q: Which of the following is a service of AWS Simple Storage Service(S3)? Select all that apply."
    1. Database Indexing  
    2. File searching  
    3. Secure Hosting  
    4. Storage Scaling  

    **Ans:** 3. Secure Hosting & 4. Storage Scaling

???+ question "21. Q: What’s the difference between instance store and EBS?"
    **Issue:**  
    I’m not sure whether to store the data associated with my Amazon EC2 instance in instance store or in an attached Amazon EBS volume. Which option is best for me?

    **Ans: Resolution:**  
    Some Amazon EC2 instance types come with a form of directly attached, block-device storage known as the instance store. The instance store is ideal for temporary storage, because the data stored in instance store volumes is not persistent through instance stops, terminations, or hardware failures.  

    For data you want to retain longer-term, or if you need to encrypt the data, we recommend using EBS volumes instead. EBS volumes preserve their data through instance stops and terminations, can be easily backed up with EBS snapshots, can be removed from instances and reattached to another, and support full-volume encryption.

???+ question "22. Q: EBS can be attached to any running instance that is in the same Availability Zone?"
    1. True  
    2. False  

    **Ans:** True

???+ question "23. Q: EBS is internet accessible"
    1. True  
    2. False  

    **Ans:** False

???+ question "24. Q: EBS has persistent file system for EC2"
    1. True  
    2. False  

    **An**

???+ question "Q: VPC is Private, Isolated, Virtual Network"
    1. True  
    2. False  

    **Ans:** True

???+ question "Q: VPC would be logically isolated network in AWS cloud"
    1. True  
    2. False  

    **Ans:** True

???+ question "Q: VPC is also give control of network architecture"
    1. True  
    2. False  

    **Ans:** True

???+ question "Q: VPC is also going to enhanced security"
    1. True  
    2. False  

    **Ans:** True

???+ question "Q: VPC has ability to interwork with other organizations"
    1. True  
    2. False  

    **Ans:** True

???+ question "Q: VPC does not enable hybrid cloud(site-to-site VPN)"
    1. True  
    2. False  

    **Ans:** False

???+ question "Q: Route Table is a set of Rules tells the direction of network"
    1. True  
    2. False  

    **Ans:** True

???+ question "Q: Security Group is a subnet level of security"
    1. True  
    2. False  

    **Ans:** False

???+ question "Q: NACLs(Network Access Lists) is a resource level of security"
    1. True  
    2. False  

    **Ans:** False

???+ question "Q: Any default stack is available in Cloud Formation?"
    **Ans:** You cannot create default stack but you can choose the type of stack to create:
    1. A sample stack  
    2. A Linux-based Chef 12 stack  
    3. A Windows-based Chef 12.2 stack  
    4. A Linux-based Chef 11.10 stack  

???+ question "Q: What is the difference between Stack and Template in Cloud Formation?"
    **Ans:**  
    - **Stack**: A collection of AWS resources that you can manage as a single unit.
    - **Template**: A JSON or YAML text file that describes the resources and their properties.

???+ question "Q: We can create multiple server for same stack?"
    **Ans:**  
    You can select one instance type (e.g., `t2.micro`) at a time, but can increase "Webserver Capacity" to launch multiple identical instances.

???+ question "Q: Can you explain the term SQS is pull based, not pushed base?"
    **Ans:**  
    Messages are **pushed** into the queue by producers, but **pulled** out by consumers using the ReceiveMessage API. They are not automatically delivered.

???+ question "Q: How many Elastic IP address can be associated with a single account?"
    1. 4  
    2. 10  
    3. 5  
    4. None of the above  

    **Ans:** 5

???+ question "Q: What is the name of the additional network interfaces that can be created and attached to any EC2 instance in your VPC?"
    1. Elastic IP  
    2. Elastic Network Interface  
    3. AWS Elastic Interface  
    4. AWS Network ACL  

    **Ans:** Elastic Network Interface

???+ question "Q: ELB has 3 instances. If an instance is unhealthy, which service ensures traffic is routed to healthy instances?"
    1. Sticky session  
    2. Fault Tolerance  
    3. Connection drainage  
    4. Monitoring  

    **Ans:** Fault Tolerance

???+ question "Q: After configuring ELB, how do you ensure user requests go to the same instance?"
    1. Session cookie  
    2. Cross zone load balancing  
    3. Connection drainage  
    4. Sticky session  

    **Ans:** Sticky session

???+ question "Q: Which of the following metrics cannot have a CloudWatch alarm?"
    1. EC2 instance status check failed  
    2. EC2 CPU utilization  
    3. RRS lost object  
    4. Auto scaling group CPU utilization  

    **Ans:** RRS lost object

???+ question "Q: Which service is provided by CloudWatch?"
    1. Monitor estimated AWS usage  
    2. Monitor EC2 log files  
    3. Monitor S3 storage  
    4. Monitor AWS calls using CloudTrail  

    **Ans:** Monitor estimated AWS usage

???+ question "Q: Which statement is not true about EC2 instance addressing?"
    1. Private IPs aren't internet reachable  
    2. Private IP works across regions  
    3. Private/Public IPs are mapped using NAT  
    4. Private IP is assigned using DHCP  

    **Ans:** Private IP works across regions

???+ question "Q: Which service provides edge storage or content delivery caching?"
    1. Amazon RDS  
    2. Simple DB  
    3. Amazon CloudFront  
    4. Amazon Associate Web Services  

    **Ans:** Amazon CloudFront

???+ question "Q: A user launches a free-tier instance from AMI with 50GB snapshot. Can it qualify for free tier?"
    1. Launch micro instance  
    2. Launch micro and resize to 50GB  
    3. Launch and keep below 30GB  
    4. Not possible under free tier  

    **Ans:** Not possible under free tier

???+ question "Q: What connection issues may occur when connecting to an instance?"
    1. Connection timed out  
    2. Server refused our key  
    3. No supported auth methods  
    4. All of the above  

    **Ans:** All of the above

???+ question "Q: Sticky session with ELB — what does it do?"
    1. Routes to one DNS  
    2. Binds session to instance  
    3. Binds IP to session  
    4. Gives DNS per IP  

    **Ans:** Binds session to instance

???+ question "Q: Which is the main AWS email platform for sending/receiving messages with your domain?"
    1. SES  
    2. SNS  
    3. SQS  
    4. SAS  

    **Ans:** SES

???+ question "Q: Which type of load balancer makes routing decisions at either the transport layer or the application layer and supports either EC2 or VPC."
    1.  Application Load Balancer
    2.  Classic Load Balancer
    3.  Primary Load Balancer
    4.  Secondary Load Balancer

    - **Ans:** Classic Load Balancer

???+ question "Q: AWS Cloud Front has been configured to handle the customer requests to the web server launched in Linux machine. How many requests per second can Amazon Cloud Front handle?"

    1.  1000
    2.  100
    3.  10000
    4.  There is no such limit

    - **Ans:** There is no such limit

???+ question "Q: You are going to launched one instance with security group. While configuring security group, what are the things you have to select?"

    1.  Protocol and type
    2.  Port
    3.  Source
    4.  All of the above

    - **Ans:** Source

???+ question "Q: Which is virtual network interface that you can attach to an instance in a VPC?"

    1.  Elastic IP
    2.  AWS Elastic Interface
    3.  Elastic Network Interface
    4.  AWS Network ACL

    - **Ans:** Elastic Network Interface

???+ question "Q: You have launched a Linux instance in AWS EC2. While configuring security group, you have selected SSH, HTTP, HTTPS protocol. Why do we need to select SSH?"

    1.  To verity that there is a rule that allows traffic from your computer to port 22
    2.  To verify that there is a rule that allows traffic from EC2 Instance to your computer
    3.  Allows web traffic from instance to your computer
    4.  Allows web traffic from your computer to EC2 instance

    - **Ans:** To verify that there is a rule that allows traffic from EC2 Instance to your computer

???+ question "Q: You need to quickly set up an email service because a client needs to start using it in the next hour. Amazon service seems to be the logical choice but there are several options available to set it up. Which of the following options to set up AWS service would best meet the needs of the client?"

    1.  Amazon SES console
    2.  AWS Cloud Formation
    3.  SMTP interface
    4.  AWS Elastic Beanstalk

    - **Ans:** Amazon SES console

???+ question "Q:You have chosen a windows instance with Classic and you want to make some change to the security group. How will these changes be effective?"

    1.  Security group rules cannot be changed
    2.  Changes are automatically applied to windows instances
    3.  Changes will be effective after rebooting the instance in that security group
    4.  Changes will be effective after 24-hours

    - **Ans:** Changes are automatically applied to windows instances

???+ question "Q: Load Balancer and DNS service comes under which type of cloud service?"

    1.  IAAS-Network
    2.  IAAS-Computational
    3.  IAAS-Storage
    4.  None of the above

    - **Ans:** IAAS-Storage

???+ question "Q: You have an EC2 instance that has an unencrypted volume. You want to create another encrypted volume from this unencrypted volume. Which of the following steps can achieve this?"

    1.  Just simply create a copy of the unencrypted volume, you will have the option to encrypt the volume.
    2.  Create a snapshot of the unencrypted volume and then while creating a volume from the snapshot you can encrypt it
    3.  Create a snapshot of the unencrypted volume (applying encryption parameters), copy the snapshot and create a volume from the copied snapshot
    4.  This is not possible, once a volume is unencrypted, there is no way to create an encrypted volume from this

    - **Ans:** Create a snapshot of the unencrypted volume (applying encryption parameters), copy the snapshot and create a volume from the copied snapshot

???+ question "Q: Where does the user specify the maximum number of instances with the auto scaling commands?"

    1.  Auto scaling Launch Config
    2.  Auto scaling group
    3.  Auto scaling policy
    4.  Auto scaling size

    - **Ans:** Auto scaling Launch Config

???+ question "Q: A user is identify that a huge data download is occurring on his instance he has already set the auto scaling policy to increase the instance count when the network Input Output increase beyond a threshold limits how can the user ensure that this temporary event does not result in scaling"

    1.  The network I/O are not affecting during data download
    2.  The policy cannot be set on the network I/O
    3.  There is no way the can stop scaling as it already configured
    4.  Suspend scaling

    - **Ans:** Suspend scaling

???+ question "Q: Which are the types of AMI provided by AWS?"

    1.  EBS Backed
    2.  Instance Store backed
    3.  None its volume type and not AMI types
    4.  Both A and B

    - **Ans:** Both A and B