import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: { title: string; content: string; authorId: number }) {
    return this.prisma.post.create({ data });
  }

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async updatePost(id: number, data: { title?: string; content?: string }) {
    return this.prisma.post.update({ where: { id }, data });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
