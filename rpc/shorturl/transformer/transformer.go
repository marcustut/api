// Code generated by goctl. DO NOT EDIT!
// Source: shorturl.proto

package transformer

import (
	"context"

	"api/rpc/shorturl/shorturl"

	"github.com/zeromicro/go-zero/zrpc"
	"google.golang.org/grpc"
)

type (
	ExpandReq   = shorturl.ExpandReq
	ExpandResp  = shorturl.ExpandResp
	ShortenReq  = shorturl.ShortenReq
	ShortenResp = shorturl.ShortenResp

	Transformer interface {
		Expand(ctx context.Context, in *ExpandReq, opts ...grpc.CallOption) (*ExpandResp, error)
		Shorten(ctx context.Context, in *ShortenReq, opts ...grpc.CallOption) (*ShortenResp, error)
	}

	defaultTransformer struct {
		cli zrpc.Client
	}
)

func NewTransformer(cli zrpc.Client) Transformer {
	return &defaultTransformer{
		cli: cli,
	}
}

func (m *defaultTransformer) Expand(ctx context.Context, in *ExpandReq, opts ...grpc.CallOption) (*ExpandResp, error) {
	client := shorturl.NewTransformerClient(m.cli.Conn())
	return client.Expand(ctx, in, opts...)
}

func (m *defaultTransformer) Shorten(ctx context.Context, in *ShortenReq, opts ...grpc.CallOption) (*ShortenResp, error) {
	client := shorturl.NewTransformerClient(m.cli.Conn())
	return client.Shorten(ctx, in, opts...)
}